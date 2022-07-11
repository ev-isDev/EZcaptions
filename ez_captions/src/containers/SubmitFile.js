import React from "react";
import Button from "./Button";

export const SubmitFile = ({ onChange, onClick }) => {
    return (
        <div>
            <input
                type="file"
                name="file"
                accept=".srt"
                onChange={onChange}
                className="btn"
                id="inputFile"
            />
            <div>
                <Button text="submit" color="blue" onClick={onClick} />
            </div>
        </div>
    );
};

// Parse an srt file and return an array of objects
export const parseSRT = (file) => {
    const reader = new FileReader();
    let captions = [];
    reader.readAsText(file.target.files[0]);
    reader.onload = (e) => {
        // split the file via map and then split the lines via split
        const lines = e.target.result
            .split("\n")
            .map((line) => line.split("\r")[0])
            .filter((line) => line.length > 0);
        //console.log(lines)
        // get caption from next three lines and add it to the captions list
        for (let i = 0; i < lines.length; i += 3) {
            const cap = {
                id: lines[i],
                start: lines[i + 1].split(" --> ")[0],
                end: lines[i + 1].split(" --> ")[1],
                text: lines[i + 2],
                edit: false,
            };
            captions.push(cap);
        }
    };
    return captions;
};

export default SubmitFile;
