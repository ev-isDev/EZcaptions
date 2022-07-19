import React, { useState } from "react";
import Clear from "./containers/Clear";
import Captions from "./containers/Captions";
import NewCaption from "./containers/NewCaption";
import SubmitFile from "./containers/SubmitFile";
import Login from "./containers/Login";
import Header from "./containers/Header";
import "./containers/RegisterStyle.css"
import InputURL from "./containers/InputURL";

import "./App.css";

const App = () => {
    const [importMenu, setImportMenu] = useState(false);
    const [loginMenu, setLoginMenu] = useState(false);
    const [clearMenu, setClearMenu] = useState(false);
    const [captions, setCaptions] = useState( JSON.parse(localStorage.getItem("userState")) || []);

    let capFile = null;

    // add a new caption and give it a random ID
    const addCaption = (caption) => {
        for (var i = 0; i < captions.length; i++) {
            if (caption.start === captions[i].start) { // same start time!
                alert('Can\'t have two captions that start at the same time!')
                return; // we can't add the caption!
            }
        }   
        const id = Math.floor(Math.random() * 10000) + 1; // give the new caption a random ID
        const newCaption = { id, ...caption };
        setCaptions([...captions, newCaption]); // update the captions list as the previous list AND the new caption
    };

    const downloadCaptions = (captions) => {
        const text = captions.map( (caption, counter) =>
            `${counter + 1}\n00:${caption.start},000 --> 00:${ caption.end },000\n${caption.text}\n\n`).join("");
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const elem = document.createElement("a");
        elem.href = url;
        elem.download = "captions.srt";
        elem.click();
        URL.revokeObjectURL(url);
    };

    const deleteCaption = (id) => {
        // filters by keeping all captions that aren't the deleted captions ID
        setCaptions(captions.filter((caption) => caption.id !== id));
    };

    // allows the pop up for the editing prompt
    const handleEditCaption = (id) => {
        // console.log(captions.indexOf(id));
        setCaptions( captions.map((caption) => caption.id === id
            ? { ...caption, edit: !caption.edit } : caption ) );
    };

    // actually does the editing!
    const editCaption = (updatedCaption) => {
        //console.log(updatedCaption);
        setCaptions( captions.map((caption) => caption.id ===
        updatedCaption.id ? updatedCaption : caption ) );
    };

    // delete all captions function
    const deleteAllCaptions = () => {
        setCaptions((captions) => []);
        setClearMenu(false) // for the clear button, when importing this does nothing!
    }

    // function ensures two modals aren't open at the same time
    const openImportMenu = () => {
        setImportMenu(true);
        setLoginMenu(false);
        setClearMenu(false);
    }
    
    // function ensures two modals aren't open at the same time
    const openLoginMenu = () => {
        setLoginMenu(true);
        setImportMenu(false);
        setClearMenu(false);
    }

    const openClearMenu = () => {
        setClearMenu(true);
        setLoginMenu(false);
        setImportMenu(false);
    }

    const moveCaptionUp = (id) => {
        const captionList = [...captions];
        for (var i = 0; i < captions.length; i++) {
            if (captionList[i].id === id) {
                if (i === 0) { // moving up the first element!
                    break; // we're not gonna do anything for right now
                }
                const temp = captionList[i];
                captionList[i] = captionList[i - 1];
                captionList[i - 1] = temp;
                setCaptions(captionList);
                break; // we can stop now!
            }
        }
    };

    const moveCaptionDown = (id) => {
        const captionList = [...captions];
        for (var i = 0; i < captions.length; i++) {
            if (captionList[i].id === id) {
                if (i === captions.length - 1) { // moving down the last element!
                    break; // we're not gonna do anything for right now
                }
                const temp = captionList[i];
                captionList[i] = captionList[i + 1];
                captionList[i + 1] = temp;
                setCaptions(captionList);
                break; // we can stop now!
            }
        }
    };

    const setCaptionFile = (file) => {
        capFile = file;
    };

    const importCaptionFile = (file) => {
        const reader = new FileReader();
        let newCaptions = [];
        reader.readAsText(capFile.target.files[0]);
        reader.onload = (e) => {
            // split the file via map and then split the lines via split
            const lines = e.target.result
                .split("\n").map((line) => line.split("\r")[0])
                .filter((line) => line.length > 0);
            console.log(lines);
            if (lines.length % 3 !== 0) {
                alert("Invalid file! File doesn't have enough data.");
                return;
            }

            var exp = new RegExp("[0-9]{2}:[0-9]{2}:[0-9]{2},[0-9]{3}"); // timestamp expression
            for (let i = 0; i < lines.length; i += 3) {
                let startText = lines[i + 1].split(" --> ")[0];
                let endText = lines[i + 1].split(" --> ")[1];
                // verify start time is in correct format using regex
                if (!exp.test(startText) || !exp.test(endText)) {
                    alert("Invalid file! Timestamp is not in correct format.");
                    return;
                }
                // Simplify start and end times
                let hours = "";
                if (startText.slice(0, 2) !== "00") {
                    hours = startText.slice(0, 2) + ":";
                }
                startText = hours + startText.slice(3, 8);

                hours = "";
                if (endText.slice(0, 2) !== "00") {
                    hours = endText.slice(0, 2) + ":";
                }
                endText = hours + endText.slice(3, 8);

                const cap = {
                    id: lines[i],
                    start: startText,
                    end: endText,
                    text: lines[i + 2],
                    edit: false,
                };
                newCaptions.push(cap);
            }
            deleteAllCaptions();
            setCaptions((captions) => [...captions, ...newCaptions]);
        };
        setImportMenu(false);
    };

    React.useEffect(() =>{
        const data = localStorage.getItem('userState');
        if(data){
            setCaptions(JSON.parse(data));
            console.log(JSON.parse(data));
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem('userState', JSON.stringify(captions));
    });

    return (
        <div>
          <Header onDownload={() => downloadCaptions(captions)} onImport={openImportMenu} onLogin = {openLoginMenu} onClear = {openClearMenu}/> 
          {importMenu && <SubmitFile closeModal={setImportMenu} onChange={setCaptionFile} submitCapFile={importCaptionFile}/>}
          {loginMenu && <Login closeModal ={setLoginMenu}/>}
          {clearMenu && <Clear closeModal = {setClearMenu} onClear = {deleteAllCaptions}/>}
        <div className="row">
            <div className='new_caption'> 
                <NewCaption onAdd={addCaption} />
            </div>
            <div className="container">
                {captions.length > 0 ? ( // Check if there are no captions in the tool
                    <Captions captions={captions} onDelete={deleteCaption} onToggle={handleEditCaption} onEdit={editCaption} 
                    onShiftup={moveCaptionUp} onShiftDown={moveCaptionDown}/>) :
                    <div className="caption-empty">
                        <h2>Please input captions!</h2>
                    </div>}
            </div>
            {!importMenu && !loginMenu && !clearMenu && <div className="container-video">
              <InputURL captionsList={captions}/>
            </div>}
        </div>
      </div>
    );
};

export default App;
