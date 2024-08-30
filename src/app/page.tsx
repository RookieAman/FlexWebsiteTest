// import Image from 'next/image'
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './wonchis.module.css'
import { client } from './lib/supabaseClient'

export default function Home() {
  const [mailInput, setMailInput] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const wonchis = document.querySelectorAll<HTMLDivElement>('.wonchi')

      wonchis.forEach((wonchi) => {
        const speed = parseFloat(wonchi.getAttribute('data-speed') || '0')
        if (speed !== null) {
          const x = (clientX - window.innerWidth / 2) * speed
          const y = (clientY - window.innerHeight / 2) * speed

          wonchi.style.transform = `translate(${x}px, ${y}px)`
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const validateEmail = (email: string) => {
    // Expresión regular para validar el formato del correo electrónico
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting || isSubscribed) return // Evitar múltiples envíos o reenvíos

    // Verificar si el checkbox está marcado
    const checkbox = document.getElementById(
      'privacy-checkbox'
    ) as HTMLInputElement
    if (!checkbox.checked) {
      window.alert(
        'Por favor, acepte la Política de privacidad para continuar.'
      )
      return
    }

    if (!validateEmail(mailInput)) {
      window.alert('Por favor, ingresa un correo electrónico válido.')
      return
    }

    setIsSubmitting(true) // Deshabilitar el botón

    try {
      const res = await client.from('mails').insert({
        email: mailInput,
      })
      console.log(res)
      setFeedbackMessage(
        '¡Gracias! Tu suscripción se ha realizado correctamente.'
      )
      setMailInput('') // Limpiar el campo de entrada
      checkbox.checked = false // Desmarcar el checkbox
      setIsSubscribed(true) // Marcar como suscrito para deshabilitar futuros envíos
    } catch (error) {
      console.error(error)
      setFeedbackMessage('Hubo un error. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false) // Rehabilitar el botón
    }
  }

  return (
    <main className="min-h-screen bg-primary z-10">
      <div
        id="headerElements"
        className="flex relative w-full justify-between z-30"
      >
        <div className="flex pt-10 pl-10 w-1/3">
          <div className="flex flex-col items-center justify-center">
            <div className="flex mb-6">
              <div className="relative mr-2 sm:mr-4">
                <a href="https://www.instagram.com/flexcidine" target="_blank">
                  <Image
                    src="/svgs/logo_insta.svg"
                    alt="Instagram logo"
                    width={31}
                    height={30}
                  />
                </a>
              </div>
              <div className="relative mr-2 sm:mr-4">
                <a
                  href="https://www.tiktok.com/@flexcidine_?lang=es"
                  target="_blank"
                >
                  <Image
                    src="/svgs/logo_tiktok.svg"
                    alt="Tiktok Logo"
                    width={26}
                    height={30}
                  />
                </a>
              </div>
              <div className="relative mr-4 sm:mr-4">
                <a href="https://www.youtube.com/@FlexCidine" target="_blank">
                  <Image
                    src="/svgs/logo_yt.svg"
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
                  src="/svgs/arrowUp.svg"
                  alt="Youtube Logo"
                  width={36}
                  height={27}
                />
                <span className="font-lato text-center text-xs sm:text-sm md:text-xl lg:text-2xl text-white">
                  ¡Seamos Wonchis!
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="text-flexbiege text-center text-xl md:text-3xl xl:text-5xl 2xl:text-6xl font-kulture uppercase pt-10">
            ¡Muy pronto!
          </h1>
        </div>
        <div className="w-1/3 flex justify-end">
          <div className="w-[444px] items-start flex justify-end">
            <Image
              className="relative"
              src="/svgs/bucketsBg.svg"
              alt="Buckets Logo"
              width={444}
              height={176}
              priority
            />
            <div className="w-[237px] absolute flex justify-end mr-2 mt-2 md:mt-6 md:mr-12 lg:mt-8 lg:mr-14">
              <Image
                className="relative w-[100px] h-[30px] sm:w-[150px] sm:h-[42px] lg:w-[237px] lg:h-[50px] xl:w-[237px] xl:h-[66px]"
                src="/svgs/bucketsLogo.svg"
                alt="Buckets Logo"
                width={237}
                height={66}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex w-full flex-col justify-center items-center z-30">
        <div className="flex flex-col items-center justify-center mb-5 md:mb-10 lg:mb-14">
          <Image
            className="relative w-[314px] h-[123px] md:w-[414px] md:h-[173px] lg:w-[628px] lg:h-[246px] px-4 my-5"
            src="/svgs/flexLogo.svg"
            alt="FlexCidine Logo"
            width={628}
            height={246}
            priority
          />
        </div>

        <div className="max-w-[450px] sm:max-w-[520px] md:max-w-[640px] xl:max-w-[1000px]">
          <p className="leading-relaxed text-xl sm:text-2xl md:text-3xl xl:text-5xl xl:leading-normal text-flexbiege text-center font-kulture px-5">
            <span className="relative inline-flex items-center">
              <img
                className="absolute top-[-10px] lg:top-[-40px] left-[-20px] lg:left-[-40px] w-[28px] h-[25px] lg:w-[56px] lg:h-[51px]"
                src="/svgs/textLines.svg"
                alt="Lines Decoration"
              />
              <span className="relative">Te</span>
            </span>{' '}
            presentamos el snack definitivo. Muy{' '}
            <span className="relative underline-custom decoration-4 decoration-[#374A99] underline">
              crujiente
            </span>
            . Alto en{' '}
            <span className="relative inline-flex">
              <span>proteínas.</span>
              <img
                className="absolute top-[100%] left-[50%] transform translate-x-[-50%] mt-[-10px] lg:mt-[-4px] w-[80px] h-[61px] lg:w-[80px] lg:h-[61px]"
                src="/svgs/textArrows.svg"
                alt="Arrows Decoration"
              />
            </span>
          </p>
        </div>
        <div className="max-w-[300px] md:max-w-[920px]">
          <p
            className={`text-center font-kulture text-xl md:text-2xl xl:text-4xl xl:leading-normal text-secondary max-w-[514px] leading-normal my-12 ${styles.footerText}`}
          >
            ¡Sé de los primeros en conseguirlos!
          </p>
        </div>

        <div className="flex justify-between items-center lg:items-start flex-col lg:flex-row mb-24">
          <span className="text-white text-center lg:text-end font-lato text-xl md:text-2xl xl:text-3xl lg:max-w-[380px] mb-4 lg:mb-0 lg:mr-8">
            Suscríbete para un acceso anticipado.
          </span>
          <div className="flex flex-col">
            <div
              className="group cursor-pointer shadow-[10px_10px_0px_0px_rgba(0,0,0)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] 
            transition-all duration-300 w-full mr-4 mb-6 lg:w-[380px] h-[70px] border-[4px] border-black bg-[#F0E7D8] rounded-lg flex items-center justify-start"
            >
              <form onSubmit={handleSubmit} className="flex items-center">
                <input
                  className="text-black bg-[#F0E7D8] font-lato text-2xl ml-4 focus:outline-none placeholder:text-black"
                  type="email"
                  name="name"
                  placeholder="Correo electrónico"
                  value={mailInput}
                  onChange={(e) => setMailInput(e.target.value)}
                  disabled={isSubmitting || isSubscribed}
                />
                <button type="submit" disabled={isSubmitting || isSubscribed}>
                  <Image
                    className="relative transition-transform duration-300 group-hover:translate-x-4"
                    src="/svgs/newsletterEnter.svg"
                    alt="Shiba Static"
                    width={49}
                    height={31}
                    priority
                  />
                </button>
              </form>
            </div>

            <div>
              <input
                type="checkbox"
                id="privacy-checkbox"
                className="cursor-pointer ml-2 mt-1 w-5 h-5 appearance-none border-2 border-black rounded-sm checked:bg-secondary checked:border-black focus:outline-none focus:ring-0"
                style={{ boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)' }}
                disabled={isSubmitting || isSubscribed}
                required
              />
              <label
                htmlFor="privacy-checkbox"
                className="font-lato text-lg md:text-xl ml-4"
              >
                Acepto la{' '}
                <a
                  href="/wonchis_politica_privacidad.pdf"
                  target="_blank"
                  className="text-white underline"
                >
                  Política de privacidad
                </a>
                .
              </label>
              {feedbackMessage && (
                <p className="mt-4 text-sm text-green-900">{feedbackMessage}</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-[240px] h-[300px] rounded-2xl bg-black fixed bottom-12 right-12 opacity-0"></div>
      </div>

      <div
        id="wonchisImgContainer"
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute top-10 left-[10%] wonchi" data-speed="-0.04">
          <img
            src="/svgs/singleWonchi.png"
            alt="Blurry Product 1"
            className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] blur-sm"
          />
        </div>
        <div className="absolute top-[30%] left-[80%] wonchi" data-speed="0.04">
          <img
            src="/svgs/singleWonchi.png"
            alt="Blurry Product 2"
            className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] blur-sm object-contain"
            style={{ transform: 'translate(-50%, -50%)' }}
          />
        </div>
        <div
          className="absolute top-[50%] left-[5%] -z-10 wonchi"
          data-speed="-0.05"
        >
          <img
            src="/svgs/singleWonchi.png"
            alt="Blurry Product 1"
            className="w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] blur-sm -z-10"
          />
        </div>
        <div
          className="absolute bottom-[20%] left-[50%] z-0 wonchi"
          data-speed="0.04"
        >
          <img
            src="/svgs/singleWonchi.png"
            alt="Blurry Product 3"
            className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] blur-md"
            style={{ transform: 'translate(-50%, 50%)' }}
          />
        </div>
        <div
          className="absolute bottom-[1%] left-[80%] -z-10 wonchi"
          data-speed="-0.05"
        >
          <img
            src="/svgs/singleWonchi.png"
            alt="Blurry Product 1"
            className="w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] blur-sm -z-10 object-contain"
          />
        </div>
      </div>
    </main>
  )
}
