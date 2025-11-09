import * as functions from 'firebase-functions'
import { google } from 'googleapis'
import { GoogleAuth } from 'google-auth-library'

const TOPIC = 'budget-killer'

export const billingMonitor = functions.pubsub.onMessagePublished(TOPIC, async (event) => {
  functions.logger.info(`💰 Event data: ${event.data.message.data}`)
  const pubsubData = event.data.message.json
  const { costAmount, budgetAmount, currencyCode } = pubsubData

  functions.logger.info(`Project current cost is: ${costAmount}${currencyCode} out of ${budgetAmount}${currencyCode}`)
  if (budgetAmount < costAmount) await _disableBilling()

  return null
})

const _setAuthCredentials = () => {
  const client = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/cloud-billing', 'https://www.googleapis.com/auth/cloud-platform'],
  })
  google.options({ auth: client })
}

const _disableBilling = async () => {
  _setAuthCredentials()

  const billing = google.cloudbilling('v1').projects
  const PROJECT_ID = process.env.GCLOUD_PROJECT
  const PROJECT_NAME = `projects/${PROJECT_ID}`

  const info = await billing.getBillingInfo({ name: PROJECT_NAME })
  if (info.data.billingEnabled) {
    try {
      await billing.updateBillingInfo({
        name: PROJECT_NAME,
        requestBody: { billingAccountName: '' },
      })
      functions.logger.info(`✂️ ${PROJECT_NAME} billing account has been removed`)
    } catch (error) {
      functions.logger.error(error)
    }
  } else {
    functions.logger.info('👉 looks like you already disabled billing')
  }
}
