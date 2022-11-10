import { View } from "react-native"
import styled from "styled-components"

const LayoutWrapper = styled(View)`
    flex: 1;
    padding-top: 20px;
`

export default function Layout ({children}) {
    return (
    <LayoutWrapper>
        { children }
    </LayoutWrapper>
    )
}