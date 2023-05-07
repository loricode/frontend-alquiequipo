import httpSeguroEquipo from '../../../infrastructure/service/httpSeguroEquipoService';

/**
 * login para ingresar a la aplicacion 
 * @param {{emial:string}} objReq 
 * @returns {Promise<{ data:Array<{ name:string, quantity:string, codeEquipo:string, description:string }>, status:number }>}
 */
export const obtnerListadoEquipo = ( objReq ) => {

  return new Promise((resolve) => {
    httpSeguroEquipo.get("equipo/listEquipo", objReq).then(response => {
       
      resolve(response);

     }).catch(err => {
       resolve(err.response);
     })

  });

}