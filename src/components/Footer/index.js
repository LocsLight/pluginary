import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItem, FooterLinksTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElement'
import {FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItem>
                            <FooterLinksTitle>À propos</FooterLinksTitle>
                            <FooterLink to="/singup">Comment ça marche</FooterLink>
                            <FooterLink to="/singup">Expérience</FooterLink>
                            <FooterLink to="/singup">Investisseurs</FooterLink>
                            <FooterLink to="/singup">Conditions d'utilisation </FooterLink>
                        </FooterLinksItem>
                        <FooterLinksItem>
                            <FooterLinksTitle>Me contacter</FooterLinksTitle>
                            <FooterLink to="/singup">Contact</FooterLink>
                            <FooterLink to="/singup">Support</FooterLink>
                            <FooterLink to="/singup">Destination</FooterLink>
                            <FooterLink to="/singup">Parrainage </FooterLink>
                        </FooterLinksItem>
                        <FooterLinksItem>
                            <FooterLinksTitle>Vidéos</FooterLinksTitle>
                            <FooterLink to="/singup">Envoyer un document vidéo</FooterLink>
                            <FooterLink to="/singup">Contenu numérique</FooterLink>
                            <FooterLink to="/singup">Influenceurs</FooterLink>

                        </FooterLinksItem>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            Pluginary
                        </SocialLogo>
                        <WebsiteRights>
                            Pluginary © {new Date().getFullYear()} Tous droits réservés.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" arial-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer