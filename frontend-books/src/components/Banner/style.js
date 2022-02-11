import styled from '@emotion/styled'

export const BannerContainer = styled.div`
    position: relative;
	height: 70vh;
    width: 100vw;
    .search {
        width: 500px;
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        input {
            width: 100%;
            height: 60px;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 0 10px;
            font-size: 16px;
            outline: none;
            text-align: center;
        }
        button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: #ccc;
            border: none;
            outline: none;
            cursor: pointer;
            svg {
                width: 60%;
                height: 60%;
                color: #fff;
            }
        }
    }
`;