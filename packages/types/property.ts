import { BaseDomain } from './base'

export enum PropertyType {
    casa_germinada = 'casa germinada',
    sobrado = 'sobrado',
    bangalo = 'bangalô',
    edicula = 'edícula',
    apartamento = 'apartamento',
    kitnet = 'kitnet',
    flat = 'flat',
    loft = 'loft',
    studio = 'studio',
}

export interface IProperty extends BaseDomain {

}
