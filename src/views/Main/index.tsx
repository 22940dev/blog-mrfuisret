import { AllPosts, PrincipalCard } from 'src/components/MainContent'
import { useEffect, useState } from 'react'
import DynamicTitle from './DynamicTitle/DynamicTitle'
import Head from 'src/components/common/Head/Head'

export default function Main() {
  const [showPrincipalCard, setShowPrincipalCard] = useState<boolean>(false)

  useEffect(() => {
    const storageValue = localStorage.getItem('principalCard')
    if (storageValue === 'closed') {
      setShowPrincipalCard(false)
    } else {
      setShowPrincipalCard(true)
    }
  }, [])

  return (
    <main>
      <Head
        title='mrLuisFer 👨‍💻 | Frontend, Javascript, React, CSS, TypeScript, HTML'
        description='Blog hecho para aprender sobre desarrollo web y tecnologias para el frontend'
        keyWords='Blog React Javascript Typescript'
      />
      <DynamicTitle />
      {showPrincipalCard && <PrincipalCard setShowPrincipalCard={setShowPrincipalCard} />}
      <br />
      <AllPosts />
    </main>
  )
}
