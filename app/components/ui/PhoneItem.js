const PhoneItem = () => {
    console.log(this.props);
    const {
        PHONE_NUMBER,
        STATUS_NAME,
        PN_LEVEL_ID,
        PRE_PN_LEVEL_ID,
        REAL_PN_LOW_PRICE,
        REAL_PRE_STORE_PRICE,
        NAME
    } = this.props.item;

    return (
        <div className='phone_number_item_container'>
            <div className='phone_number_info_item'>
                <div className='phone_number'>{PHONE_NUMBER}</div>
                <div className='phone_number_details'>
                    <div>状态: {STATUS_NAME}</div>
                    <div>号池: {NAME}</div>
                    <div>等级/原等级: {PN_LEVEL_ID}/{PRE_PN_LEVEL_ID}</div>
                </div>
            </div>
            <div className='phone_number_price_details'>
                <div>保底:<span className='font_style'>{REAL_PN_LOW_PRICE}</span>元</div>
                <div>预存:<span className='font_style'>{REAL_PRE_STORE_PRICE}</span>元</div>
            </div>
        </div>
    )
}

export default PhoneItem;