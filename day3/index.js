const fs= require("fs")   //import the file system (fs) module(built-in) of nodejs 
fs.writeFile("About.txt","Hello,its me Rojit Dhakal from Bhktapur,studyying B.SC.CSIT at Bhaktapur Multiple College.",(err)=>{
    if(err){
        console.log(err)                       //Creting Files Asynchrousnously
    }else{
        console.log(" text file created ")
    }
});

fs.readFile("About.txt",(err,data)=>{           //Reading the files
    if(err){
        console.log(err)
    }
    else{
        console.log(data.toString())
    }
})

fs.appendFile("About.txt","Thank You!",(err)=>{           //Updating the files  using appendFile
    if(err){
        console.log(err)
    }
    else{
        console.log("file Upadated")
        
    }
})
fs.rename("About.txt","About_Me.txt",(err)=>{     //renaming the file
if(err){
    console.log(err)
}else{
    console.log("File Renamed")
}

})
fs.unlink("About_Me.txt",(err)=>{       //Deleting the file
    if(err){
        console.log(err)
    }else{
        console.log("file deleted")
    }
})

