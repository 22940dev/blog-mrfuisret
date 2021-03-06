import { Context } from 'src/context/Context'
import { GridLayoutDesktop } from './Layout.styles'
import { useContext } from 'react'
import { useScreenType } from 'src/hooks/useScreenType'
import { nanoid } from 'nanoid'
import LeftSidebar from 'src/components/LeftSidebar/LeftSidebar'
import MenuMobileContextProvider from 'src/context/MenuMobileContext/MenuMobileContextProvider'
import MobileLayout from './MobileLayout'
import RightSidebar from 'src/components/RightSidebar/RightSidebar'
import Routes from 'src/Routes/Routes'

export default function Layout() {
  const screenType: string = useScreenType()

  const { completeSidebar } = useContext(Context)

  if (screenType === '3-cols') {
    return (
      <GridLayoutDesktop cols='3-cols' completeRightSide={completeSidebar}>
        <LeftSidebar key={nanoid()} />
        <Routes />
        <RightSidebar key={nanoid()} />
      </GridLayoutDesktop>
    )
  } else if (screenType === '2-cols') {
    return (
      <GridLayoutDesktop cols='2-cols' completeRightSide={completeSidebar}>
        <LeftSidebar key={nanoid()} />
        <Routes />
      </GridLayoutDesktop>
    )
  }

  return (
    <MenuMobileContextProvider>
      <MobileLayout />
    </MenuMobileContextProvider>
  )
}
