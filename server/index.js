const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mycon = require('mysql');
const fileupload = require('express-fileupload');
const { response, request } = require('express');
// const { Education } = require('../client/src/admin/education');
// const { response } = require('express');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileupload());
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    port : "3306",
    user : "root",
    password : "Madhan*18",
    database : "loginform"
});

c.connect(function(error){
    if(error){console.log(error);}
    else{console.log('Database Connected');}
})
app.post('/Regiester',(request,response)=>{
    let {username,password,name,fathername,date_of_birth,email,phone} = request.body;

    let sql = 'insert into signup(username,password,name,fathername,date_of_birth,email,phone,status) values (?,?,?,?,?,?,?,?)';
    

    // let sql1 = 'update regstatus set regstate=?';

    // c.query(sql1,[1],(error1,result1)=>{})

    c.query(sql,[username,password,name,fathername,date_of_birth,email,phone,0],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Registered"};
            response.send(s);
        }
    })

})

app.get('/Upd/:id',(request,response)=>{
    let {id}=request.params;
    let sql='select * from signup where id=?';
    // console.log(username);

    c.query(sql,[id],(error,result)=>{
        if(error){
            let s={"status":"error"}
            response.send(s);

        }
        else{
            response.send(result);
        }
    })
})

app.post('/Signin',(request,response)=>{
    let {username,password} = request.body;
    let sql = 'select * from signup where username=?';
    // console.log(username);

    c.query(sql,[username],(error,result)=>{
        if(error){
            
            let s = {"status":"error"};
            response.send(s);
        }
        else if(result.length > 0){

            let id = result[0].id;
            let username1 = result[0].username;
            let password1 = result[0].password;
            if(username1 == username && password1 == password){
                let s = {"status":"Success","userid":id};
                response.send(s);
            }
            else{
                let s = {"status":"Invalid"};
                response.send(s);
            }
        }
        else{
            let s ={"status":"final_error"};
            response.send(s);
        }
    })

})

app.post('/Update_regdata/:id',(request,response)=>{
  let {id}=request.params;
  let {username,password,name,fathername,date_of_birth,email,phone} = request.body;


  let sql='update signup set username=?,password=?,name=?,fathername=?,date_of_birth=?,email=?,phone=?,status=? where id=?';

  c.query(sql,[username,password,name,fathername,date_of_birth,email,phone,0,id],(error,result)=>{
    if(error){
        let s = {'status':'error'};
        response.send(s);
    }
    else{
        let s = {'status':'success'};
        response.send(s);
    }
})
})


app.get('/View_par_user/:id',(request,response)=>{
    let {id} = request.params;
    let sql = 'select * from signup where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
     
        }
        else{
            let name = result[0].name;
            let s = {"status":name};
            response.send(s);
        }
    })

})

app.get('/Get_userdetails/:id',(request,response)=>{
    let {id} = request.params;
    let sql = 'select * from signup where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            response.send(result);
        }
    })   
})

app.post('/Delete_personaldetails',(request,response)=>{
    let {id}=request.body;
    console.log(id);

    let sql='delete from signup where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error)
        {
            let s={'status':'error'};
            response.send(s);
        }
        else{
            let s={'status':'success'};
            response.send(s);
        }
    })
})

app.post('/Add_profilephoto',(request,response)=>
{
    let userid=request.body.userid;
    let alt_text=request.body.alt_text;
    let imagefile=request.files.image;
    let filename=imagefile.name;
    let path='../client/public/upload/'+imagefile.name;

    let url='http://localhost:3003/upload';

    let sql='insert into profilephoto(userid,url,filename,alt_text,status)values(?,?,?,?,?)';

    c.query(sql,[userid,url,filename,alt_text,0],(error,result)=>{});

    imagefile.mv(path,function(error)
    {
        if(error){
            let s={"status":"error"};
            response.send(s);

        }
        else{
            let s={"status":"uploaded"};
            response.send(s);


        }
    });
})

app.get('/View_profilephoto/:userid',(request,response)=>{
    let {userid}=request.params
    let sql='select * from profilephoto where userid=?';

    c.query(sql,[userid],(error,result)=>{
        if (error){
            response.send(error);

        }
        else{
            response.send(result);

        }

    })
})

app.post('/Delete_profilephoto',(request,response)=>{
    let id=request.body.id;
    let sql='delete from profilephoto where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            let b={"status":"error"};
            response.send(b);
            
        }
        else{
            let b={"status":"delete"};
            response.send(b)
        }
    })
})


app.get('/Profile_up_get/:id',(request,response)=>{
    let {id}=request.params;
 
    let sql='select * from profilephoto where id=?';
    c.query(sql,[id],(error,result)=>{
        if(error)
        {
            response.send(error);
        }
        else{
            response.send(result);

        }
    })
})

app.post('/Add_education',(request,response)=>{


    
    let userid=request.body.userid;


    let {pg_degree,pg_institution,pg_location,pg_cgpa,pg_yearofpassing,ug_degree,ug_institution,ug_location,ug_cgpa,ug_yearofpassing,hsc_standard,hsc_institution,hsc_location,hsc_percentage,hsc_yearofpassing,sslc_standard,sslc_institution,sslc_location,sslc_percentage,sslc_yearofpassing}=request.body;
     
    let sql='insert into  education(userid,pg_degree,pg_institution,pg_location,pg_cgpa,pg_yearofpassing,ug_degree,ug_institution,ug_location,ug_cgpa,ug_yearofpassing,hsc_standard,hsc_institution,hsc_location,hsc_percentage,hsc_yearofpassing,sslc_standard,sslc_institution,sslc_location,sslc_percentage,sslc_yearofpassing) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

    c.query(sql,[userid,pg_degree,pg_institution,pg_location,pg_cgpa,pg_yearofpassing,ug_degree,ug_institution,ug_location,ug_cgpa,ug_yearofpassing,hsc_standard,hsc_institution,hsc_location,hsc_percentage,hsc_yearofpassing,sslc_standard,sslc_institution,sslc_location,sslc_percentage,sslc_yearofpassing],(error,result)=>{
        if(error)
        {
            let s={'status':'error'}
            response.send(s);
           
        }
        else{
            let s={'status':'uploaded'}
            response.send(s);
        }
    })
})

app.get('/View_education/:userid',(request,response)=>{

    let {userid} =request.params;

    let sql ='select * from education where userid=?';

    c.query(sql,[userid],(error,result)=>{
        if(error)
        {
            response.send(error);

        }
        else{
            response.send(result);

        }
    })

})
app.post('/Delete_education',(request,response)=>{
    let id=request.body.id;
    let sql='delete from education where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            let b={"status":"error"};
            response.send(b);
            
        }
        else{
            let b={"status":"delete"};
            response.send(b)
        }
    })
})

app.post('/Add_softskills',(request,response)=>
{
    let userid=request.body.userid;

    let {html,css,bootstrap,javascript,java,nodejs,reactjs,mysql}=request.body;

    let sql ='insert into softskills(userid,html,css,bootstrap,javascript,java,nodejs,reactjs,mysql) values (?,?,?,?,?,?,?,?,?)';

    c.query(sql,[userid,html,css,bootstrap,javascript,java,nodejs,reactjs,mysql],(error,result)=>{

        if(error)
        {
            let s={"status":"error"};
            response.send(s);
        }
        else{
            let s ={"status":"uploaded"}
            response.send(s);
        }
    })
})

app.post('/Delete_softskills',(request,response)=>{
    let id=request.body.id;
    let sql='delete from softskills where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            let b={"status":"error"};
            response.send(b);
            
        }
        else{
            let b={"status":"delete"};
            response.send(b)
        }
    })
})

app.get('/View_softskills/:userid',(request,response)=>{

    let {userid}=request.params;


    let sql='select * from softskills where userid=?';

    c.query(sql,[userid],(error,result)=>{
        if(error)
        {
            response.send(error);

        }
        else{
            response.send(result);

        }
    })
})

app.get('/View_experience/:userid',(request,response)=>
{
    let {userid}=request.params;

    let sql='select * from experience where userid=?';

    c.query(sql,[userid],(error,result)=>{
        if(error)
        {
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})


app.post('/Add_experience',(request,response)=>{
   
    let userid=request.body.userid;

    let {fieldexperience,noexperience}=request.body;

    let sql='insert into experience(userid,fieldexperience,noexperience) values (?,?,?)';
    
    c.query(sql,[userid,fieldexperience,noexperience],(error,result)=>{
        if(error)
        {
            let s={'status':'error'}
            response.send(s);
        }
        else{
            let s={'status':'uploaded'}
            response.send(s);
        }
    })
})
// app.post('/Add_certificate',(request,response)=>{
   
//     let userid=request.body.userid;
//     let filetext=request.body.filetext;
//     let imagefile=request.files.filename;
//     let filename=imagefile.name;
//      let path='../client/public/upload/'+imagefile.name;

//      let url='http://localhost:3003/upload';

//     //  let {filetext,filename}=request.body;

//     let sql='insert into certificate(userid,filetext,filename,url) values (?,?,?,?)';
    
//     c.query(sql,[userid,filetext,filename,url],(error,result)=>{
//         if(error)
//         {
//             let s={'status':'error'}
//             response.send(s);
//         }
//         else{
//             let s={'status':'uploaded'}
//             response.send(s);
//         }
//     })
// })

app.post('/Add_certificate',(request,response)=>{
   
    let userid=request.body.userid;
    let filetext=request.body.filetext;
    let imagefile=request.files.filename;
    let filename=imagefile.name;
     let path='../client/public/upload/'+imagefile.name;

     let url='http://localhost:3003/upload';

    //  let {filetext,filename}=request.body;

    let sql='insert into certificate(userid,filetext,filename,url) values (?,?,?,?)';
    
    c.query(sql,[userid,filetext,filename,url],(error,result)=>{});
    imagefile.mv(path,function(error)
    {
        if(error)
        {
            let s={'status':'error'}
            response.send(s);
        }
        else{
            let s={'status':'uploaded'}
            response.send(s);
        }
    });
        
    
})

app.get('/View_certificate/:userid',(request,response)=>
{
    let {userid}=request.params;

    let sql='select * from certificate where userid=?';

    c.query(sql,[userid],(error,result)=>{
        if(error)
        {
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

app.post('/Delete_certificate',(request,response)=>{
    let id=request.body.id;
    let sql='delete from certificate where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            let b={"status":"error"};
            response.send(b);
            
        }
        else{
            let b={"status":"delete"};
            response.send(b)
        }
    })
})
 

app.post('/Add_socialmedia',(request,response)=>
{
    let userid=request.body.userid;

    let {github,linkedin}=request.body;

    let sql ='insert into socialmedia(userid,github,linkedin) values (?,?,?)';

    c.query(sql,[userid,github,linkedin],(error,result)=>{

        if(error)
        {
            let s={"status":"error"};
            response.send(s);
        }
        else{
            let s ={"status":"uploaded"}
            response.send(s);
        }
    })
})
 

app.get('/View_socialmedia/:userid',(request,response)=>
{
    let {userid}=request.params;

    let sql='select * from socialmedia where userid=?';

    c.query(sql,[userid],(error,result)=>{
        if(error)
        {
            response.send(error);
        }
        else{
            response.send(result);
        }
    })
})

app.post('/Delete_socialmedia',(request,response)=>{
    let id=request.body.id;
    let sql='delete from socialmedia where id=?';

    c.query(sql,[id],(error,result)=>{
        if(error){
            let b={"status":"error"};
            response.send(b);
            
        }
        else{
            let b={"status":"delete"};
            response.send(b)
        }
    })
})


app.listen(3003, ()=>{console.log('Port number running in 3003')});