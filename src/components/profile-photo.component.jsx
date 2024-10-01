import styled from "styled-components"

export const ProfilePhotoContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 auto;
	width: 250px;
	height: 250px;

	@media screen and (max-width: 860px) {
		width: 160px;
		height: 160px;
	}

	img {
		border-radius: 100%;
		width: 100%;
		height: 100%;
	}
`
