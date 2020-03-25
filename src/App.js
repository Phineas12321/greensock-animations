import React from 'react'
import {gsap} from 'gsap'
import './App.css'



class App extends React.Component{

  bee=()=>{
      gsap.to('.box', { duration: 2,
        ease: "bounce.out",
        y: 200
      })

      gsap.to('.bean', { duration: 2,
        ease: "bounce.out",
        x: 200
      })

      gsap.to('.bart', { duration: 2,
        ease: "bounce.out",
        x: -200
      })

      gsap.to('.beep', { duration: 2,
        ease: "bounce.out",
        y: -200
      })
    }

    boo=()=>{
      gsap.to('.box', { duration: 2,
        ease: "bounce.out",
        y: 0
      })

      gsap.to('.bean', { duration: 2,
        ease: "bounce.out",
        x: 0
      })

      gsap.to('.bart', { duration: 2,
        ease: "bounce.out",
        x: 0
      })

      gsap.to('.beep', { duration: 2,
        ease: "bounce.out",
        y: 0
      })
    }

  render(){
    return (
      <div className="App">
        <button className='button1' onClick={()=>this.bee()} >1</button>

        <button  className='button2' onClick={()=>this.boo()} >2</button>

        <img className='box' src='https://dejpknyizje2n.cloudfront.net/marketplace/products/geometric-bee-logo-sticker-1561735738.2410054.png'/>

        <img className='bean' src='https://dejpknyizje2n.cloudfront.net/marketplace/products/geometric-bee-logo-sticker-1561735738.2410054.png' />

        <img className='bart' src='https://dejpknyizje2n.cloudfront.net/marketplace/products/geometric-bee-logo-sticker-1561735738.2410054.png' />

        <img className='beep' src='https://dejpknyizje2n.cloudfront.net/marketplace/products/geometric-bee-logo-sticker-1561735738.2410054.png' />
      </div>
    )
  }
}

export default App;
