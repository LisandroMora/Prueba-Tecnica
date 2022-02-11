import styled from '@emotion/styled';

export const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    .table {
        width: 100%;
        .table-head {
            width: 100%;
            .table-head-row, {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                .table-head-cell {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 50px;
                    border-bottom: 1px solid #e0e0e0;
                    font-size: 18px;
                    font-weight: bold;
                    color: #000;
                    text-transform: uppercase;
                }
            }
        }
    }
    .table-body {
        width: 100%;
        .table-body-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #e0e0e0;
            cursor: pointer;
            :hover {
                background-color: #f5f5f5;
            }

            .table-body-cell {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 50px;
                font-size: 14px;
                font-weight: bold;
                color: #000;
                &.acciones {
                    display: flex;
                    gap: 10px;
                }
            }
        }
    }
`;