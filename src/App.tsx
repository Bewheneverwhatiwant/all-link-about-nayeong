import CustomColumn from './components/CustomColumn'

import Profile from './maincomponents/Profile'
import GitButton from './maincomponents/GitButton'
import TistoryButton from './maincomponents/TistoryButton'
import MobileButton from './maincomponents/MobileButton'
import WebButton from './maincomponents/WebButton'
import FreeButton from './maincomponents/FreeButton'
import OddButton from './maincomponents/OddButton'
import Footer from './maincomponents/Footer'

function App() {

  return (
    <CustomColumn $width='100%' $minHeight='100vh' $alignitems='center' $justifycontent='space-between'>

      <CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='1rem'>
        <Profile />
        <GitButton />
        <TistoryButton />
        <MobileButton />
        <WebButton />
        <FreeButton />
        <OddButton />
      </CustomColumn>

      <Footer />
    </CustomColumn>
  )
}

export default App
