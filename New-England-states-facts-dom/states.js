// JavaScript Document

function state(stateCode) {
  let stateInfo = "";
  let stateTitle = "";

// Connecticut    

  switch (stateCode) {
    case "ct": // Connecticut
        stateTitle = "Connecticut";
        stateInfo = "<b>Connecticut:</b><br><br>" +
                    "<b>Capital:</b> Hartford<br>" +
                    "<b>Governor:</b> Ned Lamont since 2019.<br>" +
                    "<b>Founded:</b> 1635<br>" +
                    "<b>Size:</b> 5,543 mi²<br>" +
                    "<b>Population:</b> 120,686 (2022)<br>" +
                    "<b>Link:</b> <a href='https://portal.ct.gov/'>Connecticut</a>";
        document.getElementById("pic").src = "images/connecticut.jpeg";
        document.getElementById("pic2").src = "images/connecticut-map.png";
        break;



// Maine

    case "mn": 
        stateTitle = "Maine";
        stateInfo = "<b>Maine:</b><br><br>" +
                    "<b>Capital:</b> Augusta<br>" +
                    "<b>Governor:</b> Janet Trafton Mills since 2019.<br>" +
                    "<b>Founded:</b> March 15, 1820<br>" +
                    "<b>Size:</b> 35,385 mi²<br>" +
                    "<b>Population:</b> 1.385 million (2022)<br>" +
                    "<b>Link:</b> <a href='https://www.maine.gov/portal/index.html'>Maine</a>";
        document.getElementById("pic").src = "images/maine.jpeg";
        document.getElementById("pic2").src = "images/maine-map.png";
        break;   
        
   
        
// Massachusetts


    case "ma": 
        stateTitle = "Massachusetts";
        stateInfo = "<b>Massachusetts:</b><br><br>" +
            "<b>Capital:</b> Boston<br>" +
            "<b>Governor:</b> Maura Tracy Healey serving as the 73rd governor of Massachusetts since 2023.<br>" +
            "<b>Founded:</b> February 6, 1788<br>" +
            "<b>Size:</b> Massachusetts has a land area of 7,798.9 square miles and a water area of 2,752.4 square miles.<br>" +
            "<b>Population:</b> 6.982 million people (2022)<br>" +
            "<b>Link:</b> <a href='https://www.mass.gov/'>Massachusetts</a>";
          document.getElementById("pic").src = "images/massachusetts.jpeg";
          document.getElementById("pic2").src = "images/massachusetts-map.png";
          break;  


        

// New Hampshire


    case "nh": 
       stateTitle = "New Hampshire";
       stateInfo = "<b>New Hampshire:</b><br><br>" +
            "<b>Capital:</b> Concord<br>" +
            "<b>Governor:</b> Christopher Thomas Sununu  since 2017.<br>" +
            "<b>Founded:</b> June 21, 1788<br>" +
            "<b>Size:</b> 9,350 mi²<br>" +
            "<b>Population:</b> 1.395 million (2022)<br>" +
            "<b>Link:</b> <a href=' https://www.nh.gov/ '>New Hampshire</a>";
       document.getElementById("pic").src = "images/new-hampshire.jpeg";
       document.getElementById("pic2").src = "images/new-hampshire-map.png";
       break; 
       
       
// Rhode Island 


    case "ri": 
    stateTitle = "Rhode Island ";
    stateInfo = "<b>Rhode Island:</b><br><br>" +
         "<b>Capital:</b> Providence<br>" +
         "<b>Governor:</b> Daniel James McKee  since 2021.<br>" +
         "<b>Founded:</b> 1636<br>" +
         "<b>Size:</b> 1,214 mi²<br>" +
         "<b>Population:</b> 1.094 million (2022)<br>" +
         "<b>Link:</b> <a href='https://www.ri.gov/'>Rhode Island </a>";
    document.getElementById("pic").src = "images/rhode-island.jpeg";
    document.getElementById("pic2").src = "images/rhode-island-map.png";
    break; 
    
    

// Vermont


    case "vt": 
       stateTitle = "Vermont";
       stateInfo = "<b>Vermont:</b><br><br>" +
            "<b>Capital:</b> Montpelier<br>" +
            "<b>Governor:</b> Philip Brian Scott  since 2017.<br>" +
            "<b>Founded:</b> March 4, 1791<br>" +
            "<b>Size:</b> 9,616 mi²<br>" +
            "<b>Population:</b> 647,064 people (2022)<br>" +
            "<b>Link:</b> <a href='https://www.vermont.gov/#gsc.tab=0'>Vermont</a>";
       document.getElementById("pic").src = "images/vermont.jpeg";
       document.getElementById("pic2").src = "images/vermont-map.png";
       break; 
       
       

    default:
            stateTitle = "Select a State";
            stateInfo = "Select a state to view information.";
            document.getElementById("pic").src = "";
            document.getElementById("pic2").src = "";
            break;


  }


  document.getElementById("title").innerHTML = stateTitle; 
  document.getElementById("info").innerHTML = stateInfo;


} 