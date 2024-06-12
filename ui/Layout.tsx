'use client'

import styled from '@emotion/styled'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const Layout = (props: Props) => {
    return <Container>
        {props.children}
    </Container>
}

const Container = styled.div(({ minHeight }: { minHeight?: number }) => ({
    width: '100vw',
    minWidth: 1216,
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: minHeight ?? '100vh',
    backgroundColor: 'white',
    alignItems: 'center',
}))
