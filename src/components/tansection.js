import React, {useState} from "react";
import "./transection.css"

function Transection(){
    const [firstElement, firstElementShow] = useState(true);
    const [secondElement, secondElementShow] = useState(false);

    async function apiData(){
        var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJod…iNSJ9.VRygH8qey3jAvSIEP3Tin7xUM2fnhRRfiSnpwJwwdYw");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://staging.hospyta.com/vendor/transactions", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }

    return (
        <div>

        <div className="BUTTONS">
            <button type="button" onClick={() => {secondElementShow(false);firstElementShow(true)}}>Our Services</button>
            <button type="button" onClick={() => {firstElementShow(false);secondElementShow(true)}}>Our Work Flow</button>
        </div>
        
            
        <div className="contentcontainer">
            { firstElement? 
            
            <div className="mydivcontainer">
                <div className="myDiv">
                    <div className="subMyDiv">
                        <h3>Web Design</h3>
                    </div>
                    <div className="subMyDivParagraph">

                    <span>this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    </span>
                    </div>
                </div>
                <div className="myDiv">
                    <div className="subMyDiv">
                        <h3>Web Developement</h3>
                    </div>
                    <div className="subMyDivParagraph">

                    <span>this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    </span>
                    </div>
                </div>
                <div className="myDiv">
                    <div className="subMyDiv">
                        <h3>SEO</h3>
                    </div>
                    <div className="subMyDivParagraph">

                    <span>this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    </span>
                    </div>
                </div>
                <div className="myDiv">
                    <div className="subMyDiv">
                        <h3>Marketing</h3>
                    </div>
                    <div className="subMyDivParagraph">

                    <span>this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    </span>
                    </div>
                </div>
                <div className="myDiv">
                    <div className="subMyDiv">
                        <h3>App Developement</h3>
                    </div>
                    <div className="subMyDivParagraph">

                    <span>this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    </span>
                    </div>
                </div>
                <div className="myDiv">
                    <div className="subMyDiv">
                        <h3>Block Chain</h3>
                    </div>
                    <div className="subMyDivParagraph">

                    <span>this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    this is test paragraph. we will show our values here.
                    </span>
                    </div>
                </div>
            </div>
            :null}

            { secondElement? 
             <div className="mydivcontainer">
             <div className="myDiv">
                 <div className="subMyDiv">
                     <h3>Information</h3>
                 </div>
                 <div className="subMyDivParagraph">

                 <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                 </span>
                 </div>
             </div>
             <div className="myDiv">
                 <div className="subMyDiv">
                     <h3>Discover</h3>
                 </div>
                 <div className="subMyDivParagraph">

                 <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                 </span>
                 </div>
             </div>
             <div className="myDiv">
                 <div className="subMyDiv">
                     <h3>Deploy</h3>
                 </div>
                 <div className="subMyDivParagraph">

                 <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                 </span>
                 </div>
             </div>
             <div className="myDiv">
                 <div className="subMyDiv">
                     <h3>Implementation</h3>
                 </div>
                 <div className="subMyDivParagraph">

                 <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                 </span>
                 </div>
             </div>
             <div className="myDiv">
                 <div className="subMyDiv">
                     <h3>Execution</h3>
                 </div>
                 <div className="subMyDivParagraph">

                 <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                 </span>
                 </div>
             </div>
             <div className="myDiv">
                 <div className="subMyDiv">
                     <h3>Delivery</h3>
                 </div>
                 <div className="subMyDivParagraph">

                 <span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                 </span>
                 </div>
             </div>
         </div>
            :null}
        </div>
       
            

        </div>
    )
}

export default Transection