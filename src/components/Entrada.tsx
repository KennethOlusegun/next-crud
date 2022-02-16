interface EntradaProps {
    tipo?: 'text' | 'text'
    texto: string
    valor: any
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor:any) => void
}

export default function Formulario(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-5">
                {props.texto}
            </label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg
                    focus: outline-none bg-gray-200 px-3 py-2
                    ${props.somenteLeitura? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}