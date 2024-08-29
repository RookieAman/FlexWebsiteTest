// import Image from 'next/image'
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './wonchis.module.css'
import ShibaStatic from '../../public/shibaStatic.svg'
import ShibaSvg from '@/components/shibaSvg'
import { client } from './lib/supabaseClient'

export default function Home() {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null
    y: number | null
  }>({ x: null, y: null })

  const [mailInput, setMailInput] = useState('')

  const validateEmail = (email: string) => {
    // Expresión regular para validar el formato del correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateEmail(mailInput)) {
      window.alert('Por favor, ingresa un correo electrónico válido.')
      return
    }

    try {
      const res = await client.from('mails').insert({
        email: mailInput,
      })
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  // useEffect(() => {
  //   const updateMousePosition = (e: MouseEvent) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY })
  //   }

  //   window.addEventListener('mousemove', updateMousePosition)

  //   return () => {
  //     window.removeEventListener('mousemove', updateMousePosition)
  //   }
  // }, [])

  // useEffect(() => {
  //   const moveEyes = (event: MouseEvent) => {
  //     const eyeLeft = document.getElementById(
  //       'eye-left'
  //     ) as SVGCircleElement | null
  //     const eyeRight = document.getElementById(
  //       'eye-right'
  //     ) as SVGCircleElement | null

  //     // Verifica que los elementos existan
  //     if (!eyeLeft || !eyeRight) return

  //     console.log('EYES:')
  //     console.log(eyeLeft, eyeRight)

  //     const { clientX: mouseX, clientY: mouseY } = event
  //     const svgRect = document.querySelector('svg')?.getBoundingClientRect()

  //     if (!svgRect) return

  //     const svgCenterX = svgRect.left + svgRect.width / 2
  //     const svgCenterY = svgRect.top + svgRect.height / 2

  //     const angleLeft = Math.atan2(
  //       mouseY - svgCenterY,
  //       mouseX - (svgCenterX - 50)
  //     )
  //     const angleRight = Math.atan2(
  //       mouseY - svgCenterY,
  //       mouseX - (svgCenterX + 50)
  //     )

  //     const radius = 10 // Tamaño del movimiento de los ojos

  //     const eyeLeftX = 150 + Math.cos(angleLeft) * radius
  //     const eyeLeftY = 150 + Math.sin(angleLeft) * radius

  //     const eyeRightX = 250 + Math.cos(angleRight) * radius
  //     const eyeRightY = 150 + Math.sin(angleRight) * radius

  //     eyeLeft.setAttribute('cx', eyeLeftX.toString())
  //     eyeLeft.setAttribute('cy', eyeLeftY.toString())

  //     eyeRight.setAttribute('cx', eyeRightX.toString())
  //     eyeRight.setAttribute('cy', eyeRightY.toString())
  //   }

  //   document.addEventListener('mousemove', moveEyes)

  //   return () => {
  //     document.removeEventListener('mousemove', moveEyes)
  //   }
  // }, [])

  return (
    <main className="flex min-h-screen bg-primary">
      <div className="flex absolute w-full justify-between">
        <div className="flex pt-10 pl-10 w-1/3">
          <div className="flex flex-col items-center justify-center">
            <div className="flex mb-6">
              <div className="relative mr-4">
                <a href="https://www.instagram.com/flexcidine" target="_blank">
                  <Image
                    src="/logo_insta.svg"
                    alt="Instagram logo"
                    width={31}
                    height={30}
                  />
                </a>
              </div>
              <div className="relative mr-4">
                <a
                  href="https://www.tiktok.com/@flexcidine_?lang=es"
                  target="_blank"
                >
                  <Image
                    src="/logo_tiktok.svg"
                    alt="Tiktok Logo"
                    width={26}
                    height={30}
                  />
                </a>
              </div>
              <div className="relative mr-4">
                <a href="https://www.youtube.com/@FlexCidine" target="_blank">
                  <Image
                    src="/logo_yt.svg"
                    alt="Youtube Logo"
                    width={41}
                    height={28}
                  />
                </a>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col justify-center items-center animate-bounce">
                <Image
                  src="/arrowUp.svg"
                  alt="Youtube Logo"
                  width={36}
                  height={27}
                />
                <span className="font-lato text-sm md:text-xl lg:text-2xl text-white">
                  ¡Seamos Wonchis!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-flexbiege text-center text-xl md:text-2xl lg:text-5xl font-kulture uppercase pt-10">
            ¡Muy pronto!
          </h1>
        </div>
        <div className="w-1/3 flex justify-end">
          <div className="w-[444px] items-start flex justify-end">
            <Image
              className="relative"
              src="/bucketsBg.svg"
              alt="Buckets Logo"
              width={444}
              height={176}
              priority
            />
            <div className="w-[237px] absolute flex justify-end md:mt-4 mr-2 mt-4 md:mr-6 lg:mt-8 lg:mr-14">
              <Image
                className="relative lg:w-[237px] lg:h-[66px] w-[100px] h-[28px] sm:w-[150px] sm:h-[42px]"
                src="/bucketsLogo.svg"
                alt="Buckets Logo"
                width={237}
                height={66}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center mb-5 md:mb-10 lg:mb-14">
          <h1 className="font-kulture text-4xl md:text-4xl lg:text-7xl uppercase text-black mb-1 md:mb-2 lg:mb-5">
            by flex
          </h1>
          <span
            className={`font-kulture text-5xl md:text-6xl lg:text-9xl uppercase text-white ${styles.wonchis}`}
          >
            WONCHIS
          </span>
        </div>

        <div className="max-w-[920px]">
          <p className="text-3xl lg:text-5xl text-flexbiege text-center font-kulture leading-normal">
            Te presentamos el snack definitivo. Muy crujiente. Alto en
            proteínas.
          </p>
        </div>

        <div className="mt-[-30px]">
          {/* <Image
            className="relative"
            src="/shibaStatic.svg"
            alt="Shiba Static"
            width={237}
            height={243}
            priority
          /> */}
          <ShibaStatic className="w-64 h-64" />
          {/* <ShibaSvg /> */}
        </div>

        <div className="flex justify-between items-start flex-col lg:flex-row">
          <p
            className={`text-center md:text-end font-kulture text-2xl lg:text-5xl text-secondary max-w-[514px] leading-normal m-8 ${styles.footerText}`}
          >
            ¡Sé de los primeros en hacer el pedido!
          </p>
          <div className="flex flex-col">
            <div
              className="group cursor-pointer m-8 mt-12 shadow-[10px_10px_0px_0px_rgba(0,0,0)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] 
            transition-all duration-300 w-full mr-4 lg:w-[380px] h-[70px] border-[4px] border-black bg-[#F0E7D8] rounded-lg flex items-center justify-start"
            >
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  className="text-black bg-[#F0E7D8] font-lato text-2xl ml-4 focus:outline-none placeholder:text-black"
                  type="email"
                  name="name"
                  placeholder="Correo electrónico"
                  onChange={(e) => setMailInput(e.target.value)}
                />
                <button>
                  <Image
                    className="relative transition-transform duration-300 group-hover:translate-x-4"
                    src="/newsletterEnter.svg"
                    alt="Shiba Static"
                    width={49}
                    height={31}
                    priority
                  />
                </button>
              </form>
            </div>

            <span className="text-white font-lato text-xl md:text-3xl max-w-[380px] ml-8">
              Suscríbete para un acceso anticipado
            </span>
          </div>
        </div>

        <div className="w-[240px] h-[300px] rounded-2xl bg-black fixed bottom-12 right-12 opacity-0"></div>
      </div>

      {/* <p className="justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">
          src/app/page.tsx {mousePosition.x} {mousePosition.y}
        </code>
      </p> */}
    </main>
  )
}
