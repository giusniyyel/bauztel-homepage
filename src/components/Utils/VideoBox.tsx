import { useState } from 'react'
import styles from './VideoBox.module.scss'
import { PlayIcon } from '../../shared/data/Logos'

const VideoBox = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  function playVideo() {
    setIsPlaying(true)
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          {isPlaying && (
            <div className={styles.video_container}>
              <iframe
                src='https://www.youtube-nocookie.com/embed/6X-pErkPNhI?feature=oembed&amp;rel=0&amp;mute=0&amp;loop=0&amp;controls=1&amp;autoplay=1'
                frameBorder='0'
                allowFullScreen
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              ></iframe>
            </div>
          )}
          {!isPlaying && (
            <>
              <div className={styles.image_container} onClick={playVideo}></div>
              <div className={styles.play_container} onClick={playVideo}>
                <div className={styles.play_icon}>
                  <PlayIcon />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default VideoBox
