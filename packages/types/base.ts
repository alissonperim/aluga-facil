export interface BaseDomain {
  id: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date | null
  createdBy?: string
  updatedBy?: string
  deletedBy?: string
  isActive?: boolean
}
