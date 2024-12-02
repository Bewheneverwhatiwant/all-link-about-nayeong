import CustomColumn from './components/CustomColumn'

import Profile from './maincomponents/Profile'
import GitButton from './maincomponents/GitButton'
import TistoryButton from './maincomponents/TistoryButton'
import MobileButton from './maincomponents/MobileButton'
import WebButton from './maincomponents/WebButton'
import FreeButton from './maincomponents/FreeButton'
import OddButton from './maincomponents/OddButton'
import BlogButton from './maincomponents/BlogButton'
import Footer from './maincomponents/Footer'

function App() {

  return (
    <CustomColumn $width='100%' $minHeight='100vh' $alignitems='center' $justifycontent='center' $gap='5rem'>

      <CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='10rem'>
        <Profile />

        <CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='2rem'>
          <GitButton />
          <TistoryButton />
          <MobileButton />
          <WebButton />
        </CustomColumn>

        <CustomColumn $width='100%' $height='auto' $alignitems='center' $justifycontent='center' $gap='2rem'>
          <FreeButton />
          <OddButton />
          <BlogButton />
        </CustomColumn>

      </CustomColumn>

      <Footer />
    </CustomColumn>
  )
}

export default App
