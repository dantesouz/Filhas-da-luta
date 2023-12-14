import { Card, CardBody, CardTitle, CardText, Tooltip } from 'reactstrap';
import React, { useState, useId } from 'react';


function ItemLoja({ img, titulo, descricao }) {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
    const idUnico = useId().replaceAll(/:/g, "");
    return (
        <div>
            <Card
                className='mb-5 mx-auto bg-black text-white '
                color="light"
                style={{
                    width: '18rem',
                    minHeight: '425px'
                }}
            >
                <img
                    alt={titulo}
                    src={img}
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {titulo}
                    </CardTitle>
                    <CardText id={idUnico}>
                        {descricao.substring(0, 70)}{descricao.length <= 70 && '...'}
                        <Tooltip
                            isOpen={tooltipOpen}
                            target={idUnico}
                            toggle={toggle}>
                            {descricao}
                        </Tooltip>

                    </CardText>

                </CardBody>
            </Card>
        </div>
    );
}

export default ItemLoja;