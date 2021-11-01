import styled from "styled-components";
import PdfCv from './../docs/CvAnibalNiz.pdf';

export default function Pdf() {

    const DivPdf = styled.div`
        height: 100%;
        width: 100%;
        position: absolute;
    `;

    const ObjectPdf = styled.object`
        height: 100%;
        width: 100%;
    `;

    return(
        <DivPdf>
            <ObjectPdf data={PdfCv} type='application/pdf'></ObjectPdf>
        </DivPdf>
    )
}