// export const formatPrice = num => {
//     const splitNum = num.split('.');
//     const firstHalf = splitNum[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     const secondHalf = splitNum[1];
//
//     return secondHalf ? `${firstHalf}.${secondHalf}` : firstHalf;
// }

export const formatPrice= (num, dec) =>{

    if ((typeof num !== 'number') || (typeof dec !== 'number'))
        return false;

    var num_sign = num >= 0 ? 1 : -1;

    return (Math.round((num*Math.pow(10,dec))+(num_sign*0.0001))/Math.pow(10,dec)).toFixed(dec);
}