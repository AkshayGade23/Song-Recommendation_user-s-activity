import React from 'react'

function DownloadAds() {
    const downloadImgStyl = "border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]"
    return (
        <div className="download">
            <div className="download_images flex">
                <img src={require("../img/AppStore.png")} alt="" className={downloadImgStyl + " mr-[2rem]"}/>
                <img src={require("../img/GooglePlay.png")} alt="" className={downloadImgStyl}/>
            </div>
        </div>
    )
}

export default DownloadAds