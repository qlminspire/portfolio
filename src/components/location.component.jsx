import React from "react"
import styled from "styled-components"

import { H5 } from "./shared/typography"

import LocationIcon from "../assets/icons/location.svg"

export const Location = ({ location }) => (
	<LocationContainer>
		<LocationIcon />
		<H5>{location}</H5>
	</LocationContainer>
)

const LocationContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: top;

	H5 {
		padding: 0;
		margin: 0;
	}

	svg {
		height: 18px;
	}
`
