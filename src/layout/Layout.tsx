import React from 'react'
import { Container} from 'react-bootstrap'
import MainNavigation from './MainNavigation'

const Layout :React.FC = ({children}) => {
    return (
        <>
        <MainNavigation />
        <Container className="h-100">
             <main className="h-100 mt-5">{children}</main>
        </Container>
        </>
    )
}

export default Layout
