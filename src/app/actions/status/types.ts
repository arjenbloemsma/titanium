type ProvisioningStatus = 'Pending' | 'Provisioning' | 'Provisioned' | 'Failed'

export type ProvisioningRow = {
   SiteAlias: string
   SiteTitle: string
   SiteCreated: string // Date
   SiteStatus: ProvisioningStatus
   Type: string
   Error: string
   TemplateName: string
   TemplateVersion: string
   TotalNumbesOfTemlateSteps: number
   TemplateStep1: string // Date
   TemplateStep2: string // Date
   TemplateStep3: string // Date
   TemplateStep4: string // Date
   TemplateStatus: ProvisioningStatus
   Action: string
   FunctionId: string
   LogicAppRunId: string
   Requested: string // Date
}
