//yha p sara common code hoga jo m diffenent componenets m use kr skta hu

export const downloadMedia = async (e, originalImage) => {
    e.preventDefault();//browser ki default functionality ko prevent kra
    //try catch lgaya h kyuki api call krenga yha pr
    //ek cheej notice kri hogi ki ager hum kisi url ko browser k tag m paste krta h toh vo photo khud hi download ho jati h kyuki get requeust call hoti h,toh yha huma same kaam krna h mujhe originalImage leke get request marni h
    try {
        fetch(originalImage)//call krna k liya
        .then(resp => resp.blob())//image,file ko dowload krna h toh m blob leke download kr skta h
        //hum normally fetch likhka reposnse.json likhta tha but yh aresp.blob likha
        .then(blob => {//ab blob leke kaam kr skta ho 
            const url = window.URL.createObjectURL(blob);//created a url
            const a = document.createElement('a');//creating anchor tag
            a.style.display = 'none';
            a.href = url;//anchor tag s url ko attack krka aap ab dirctly dowload kr skta ho agr ispe click kr doga toh

            const nameSplit = originalImage.split("/");//kis  naam s download krni h file
            const duplicateName = nameSplit.pop();//last k le lega part  

            // the filename you want
            a.download = "" + duplicateName + "";
            document.body.appendChild(a);//anchor tag ko body m append krna padega
            a.click();
            window.URL.revokeObjectURL(url);//The URL. revokeObjectURL() static method releases an existing object URL which was previously created by calling URL. createObjectURL() .
        })
        .catch((error) => console.log('Error while downloading the image ', error))//.then k baad.catch bhi hota agr yh download nhi ho pai toh

    } catch (error) {
        console.log('Error while downloading the image ', error);
    }
}

export const formatDate = (date) => {
    const hours = new Date(date).getHours();//timestamp s hrs nikal skta h,date class ka object bnaka h timestamp ko uska andr pass krna hota h 
    const minutes = new Date(date).getMinutes();
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;//but agr yh 10 s chota h toh yh single digi 9 return krta h ,mujhe yha 09 chahiya toh m thoda format krunga,maina liya string format m concat krna padega 
};