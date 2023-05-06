import httpPublicEquipo from '../../../infrastructure/service/httpPublicService';

/**
 * login para ingresar a la aplicacion 
 * @param {{emial:string}} objReq 
 * @returns {Promise<{ data:{}, status:number }>}
 */
export const signIn = ( objReq ) => {

  return new Promise((resolve) => {
   
     httpPublicEquipo.post("login/signIn", objReq).then(response => {
       resolve(response)
     }).catch(err => {
       resolve(err.response)
     })

  });

}