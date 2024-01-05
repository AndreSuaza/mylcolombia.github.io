import { CardItem } from "../components/CardItem";

export const CreateDeck = ({deck, modifyNumberCards}) => {

  return (
    <>
        <div 
          className="row px-3 pt-4 bg-dark"
          style={{
            backgroundImage: `url('./logo-dl.png')`,
            backgroundPositionX: 'right',
            backgroundPositionY: 'bottom',
            backgroundSize: '30%',
            backgroundRepeat: 'no-repeat',
            minHeight: 120
          }}
        >
          
          {deck.map( data => data && 
              <div 
                key={data.card.id} 
                className={`col-lg-2 col-md-6 col-xs-12 mb-2 position-relative`} 
                style={{paddingRight: '0',}}
                
              >
                <div onClick={() => modifyNumberCards(data, '-')}>
                  <CardItem card={data.card} detailCard={false} />
                </div>
                <div className="lh-sm position-absolute lh-1 text-dark top-50 end-0 bg-primary col text-center">
                  <div 
                  className="border-bottom px-1 cursor-pointer"
                  style={{lineHeight: 1, paddingBottom: 3}}
                  onClick={() => modifyNumberCards(data, '+')}  
                  >+</div>
                  <div 
                    className="border-bottom px-1 bg-dark text-white" 
                    style={{lineHeight: 1, paddingBottom: 3}}
                  >
                    {data.copys}</div>
                  <div 
                  className="px-1 cursor-pointer bg-primary"
                  style={{lineHeight: 1, paddingBottom: 3}}
                  onClick={() => modifyNumberCards(data, '-')}  
                  >-</div>
                </div>
              </div>
          )}          
            
      </div>
    </>
  )
}
