import Header from './Header';

const Layout = (props) => {
  return (
    <>
      <Header/>
      <main>
        {props.children}
      </main>
      {/* Footer Component Here */}
    </>
  )
}

export default Layout
