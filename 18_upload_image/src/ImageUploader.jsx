import React, { useState, useRef } from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import axios from 'axios'
import Camera from '/src/assets/camera.svg'

import style from './ImageUploader.module.scss'

//assetsを使うには、vercel.jsonを作成する

export const ImageUploader = ({ callBackFromChild, movieId }) => {
    //callBackFromChild({ isLoading: true });
    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null)
    let [loading, setLoading] = useState(false)

    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = () => {
        hiddenFileInput.current.click()
    }

    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file
    const handleChange = (e) => {
        const imageUploaded = e.target.files[0]
        console.log('file=', imageUploaded)

        const formData = new FormData()
        formData.append('files', imageUploaded)

        //spinner
        setLoading(true)

        axios
            .post('https://lusty.asia:1443/api/upload', formData)
            .then((response) => {
                console.log('response=', response)

                const imageId = response.data[0].id
                const payload = {
                    data: {
                        image: imageId,
                    },
                } // users.avatar_urlを変更してみる。
                axios
                    .put(`https://lusty.asia:1443/api/movies/${movieId}`, payload)
                    .then((response) => {
                        console.log('success movie response=',response)

                        //spinner
                        setLoading(false)

                        // Call Parents Function
                        callBackFromChild(imageUploaded)
                    })
                    .catch((error) => {
                        console.log('error movie:',error)

                        //spinner
                        setLoading(false)

                        //handle error
                    })
            })
            .catch((error) => {
                console.log('error upload:',error)

                //spinner
                setLoading(false)

                //handle error
            })
    }

    return (
        <>
            <div className="sweet-loading">
                <button className={style.camera_button} onClick={handleClick}>
                    <img src={Camera} />
                    <PulseLoader
                        speedMultiplier={0.6}
                        size={15}
                        color={'#36d7b7'}
                        loading={loading}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </button>
                <input
                    type="file"
                    accept="image/*"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />
            </div>
        </>
    )
}
