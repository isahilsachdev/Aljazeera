import React from 'react';

import { Container, Wrapper, Row, Column, Link, Title,Social,Icons,Image, Trademark } from './Styles/FooterStyles';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Footer.Title = function FooterTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Footer.Social = function FooterSocial({ children, ...restProps }) {
    return <Social {...restProps}>{children}</Social>
}

Footer.Icons = function FooterIcons({ children, ...restProps }) {
    return <Icons {...restProps}>{children}</Icons>
}
Footer.Image = function FooterImage({ children, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
}
Footer.Trademark = function FooterTrademark({ children, ...restProps }) {
    return <Trademark {...restProps}>{children}</Trademark>
}
