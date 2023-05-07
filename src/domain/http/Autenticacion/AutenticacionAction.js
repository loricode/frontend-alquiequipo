import httpPublicService from '../../../infrastructure/service/httpPublicService';

/**
 * login para ingresar a la aplicacion 
 * @param {{emial:string}} objReq 
 * @returns {Promise<{ data:{ token:string, fullName:string, email:string }, status:number }>}
 */
export const signIn = ( objReq ) => {

  return new Promise((resolve) => {
   
   httpPublicService.post("login/signIn", objReq).then(response => {
       resolve(response)
     }).catch(err => {
       resolve(err.response)
     })

  });

}