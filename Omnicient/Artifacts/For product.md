---
Tags: [Designs]
---
Related: [[Omnicient/Monad Seeds/Economics]] [[Ethical banking]] [[Banking]]
# For product
// Written in LENS, a pseudocode for smart contracts.  
// This file is licensed under the GNU AGPL v3 or later.  
// The For Product model changes why we fund, work and own  
// to resolve the conflict between abundance and finance.

/// COMMENTARY  
// When we buy products  
// in the usual For Profit model,  
// we pay all the costs of production,  
// and also profit as ownership changes  
// for each step in the supply chain.

// We can make businesses owned by the  
// consumers who need those products  
// so price and cost are the same.

// For example, if you own an avocado tree,  
// you own those avocados without purchase,  
// even if someone else or ![:robot:](https://async.hackalong.io/images/emoji/twitter/robot.png?v=9 ":robot:") does the work.

// This is a generalization of  
// [Wikipedia.org/wiki/Imputed_rent 1](http://Wikipedia.org/wiki/Imputed_rent)

// By combining the roles  
// of consumer and owner,  
// purchase disappears,  
// and those profits with it.

// There is no profit  
// since the consumer  
// remains the owner.

// BTW: Every worker is a consumer.

// From the perspective of a group, we can:  
// 1. Sell future products to buy property {land, tools, etc.} without debt. This is just crowdfunding to supply workers with the property required for production.  
// 2. Buy future work in exchange for property. Workers, and only workers, gain property ownership, without debt, as they complete work agreements.  
// 3. Use property ownership and work agreements to “pre-allocate” goods and services. This creates a true insurance system.  
// 4. Sell surplus products to buy even more property without debt. This is a profit-sharing strategy to supply workers with more property.

/// CODE  
DEFINE[Work]: Human action.  
DEFINE[Sources]: Except for work, all the material and immaterial inputs required for production, such as land, water, tools, genetics, designs, radio spectrum, etc.  
DEFINE[Product]: Any good or service.

== User Interface  
BUTTON[Buy Future Product]: Prepay for Products with either work or money.  
Auto-completes when Product is defined, else calls SCREEN[Define Product].  
![:ticket:](https://async.hackalong.io/images/emoji/twitter/ticket.png?v=9 ":ticket:") ↔ ![:moneybag:](https://async.hackalong.io/images/emoji/twitter/moneybag.png?v=9 ":moneybag:") DAO auctions Product Tickets​:ticket:, each representing a future Product.  
![:moneybag:](https://async.hackalong.io/images/emoji/twitter/moneybag.png?v=9 ":moneybag:") ↔ ![:house_with_garden:](https://async.hackalong.io/images/emoji/twitter/house_with_garden.png?v=9 ":house_with_garden:") DAO uses some prepayments to buy Sources for future production.  
![:moneybag:](https://async.hackalong.io/images/emoji/twitter/moneybag.png?v=9 ":moneybag:") ↔ ![:money_mouth_face:](https://async.hackalong.io/images/emoji/twitter/money_mouth_face.png?v=9 ":money_mouth_face:") DAO uses some prepayments to payoff external debt held by workers.  
![:avocado:](https://async.hackalong.io/images/emoji/twitter/avocado.png?v=9 ":avocado:") ↔ ![:ticket:](https://async.hackalong.io/images/emoji/twitter/ticket.png?v=9 ":ticket:") Each Product Ticket​:ticket: has a natural begin-time and expire-time.

// This is how you prepay with work.  
BUTTON[Sell Future Product]: Sign agreement to complete future work.  
Auto-completes when Product is defined, else calls SCREEN[Define Product].  
▦ ↔ ![:page_with_curl:](https://async.hackalong.io/images/emoji/twitter/page_with_curl.png?v=9 ":page_with_curl:")![:writing_hand:](https://async.hackalong.io/images/emoji/twitter/writing_hand.png?v=9 ":writing_hand:") DAO auctions Source Titles▦, each representing 1_ft² of land ownership.  
![:house_with_garden:](https://async.hackalong.io/images/emoji/twitter/house_with_garden.png?v=9 ":house_with_garden:")![:white_check_mark:](https://async.hackalong.io/images/emoji/twitter/white_check_mark.png?v=9 ":white_check_mark:") → ![:shower:](https://async.hackalong.io/images/emoji/twitter/shower.png?v=9 ":shower:")![:green_salad:](https://async.hackalong.io/images/emoji/twitter/green_salad.png?v=9 ":green_salad:")![:bed:](https://async.hackalong.io/images/emoji/twitter/bed.png?v=9 ":bed:") → ![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") You own the Products of vested Sources without purchase.  
![:house_with_garden:](https://async.hackalong.io/images/emoji/twitter/house_with_garden.png?v=9 ":house_with_garden:") & ![:shower:](https://async.hackalong.io/images/emoji/twitter/shower.png?v=9 ":shower:")![:green_salad:](https://async.hackalong.io/images/emoji/twitter/green_salad.png?v=9 ":green_salad:")![:bed:](https://async.hackalong.io/images/emoji/twitter/bed.png?v=9 ":bed:") → ![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") You receive immediate access to some Sources and critical Products.  
![:page_with_curl:](https://async.hackalong.io/images/emoji/twitter/page_with_curl.png?v=9 ":page_with_curl:")![:white_check_mark:](https://async.hackalong.io/images/emoji/twitter/white_check_mark.png?v=9 ":white_check_mark:") → ![:white_check_mark:](https://async.hackalong.io/images/emoji/twitter/white_check_mark.png?v=9 ":white_check_mark:")![:money_mouth_face:](https://async.hackalong.io/images/emoji/twitter/money_mouth_face.png?v=9 ":money_mouth_face:") → ![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") As work is completed, external debt is resolved without paying interest.  
![:white_check_mark:](https://async.hackalong.io/images/emoji/twitter/white_check_mark.png?v=9 ":white_check_mark:")![:money_mouth_face:](https://async.hackalong.io/images/emoji/twitter/money_mouth_face.png?v=9 ":money_mouth_face:") + ![:page_with_curl:](https://async.hackalong.io/images/emoji/twitter/page_with_curl.png?v=9 ":page_with_curl:")![:white_check_mark:](https://async.hackalong.io/images/emoji/twitter/white_check_mark.png?v=9 ":white_check_mark:") = ![:house_with_garden:](https://async.hackalong.io/images/emoji/twitter/house_with_garden.png?v=9 ":house_with_garden:")![:white_check_mark:](https://async.hackalong.io/images/emoji/twitter/white_check_mark.png?v=9 ":white_check_mark:") → ![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") After debt is repaid, Sources vest as work is completed. Workers become consumer-owners.

BUTTON[Buy Surplus Product]: Pay for Products with either work or money.  
Auto-completes when surplus is available, else calls SCREEN[Buy Future Product].  
![:ticket:](https://async.hackalong.io/images/emoji/twitter/ticket.png?v=9 ":ticket:") ↔ ![:moneybag:](https://async.hackalong.io/images/emoji/twitter/moneybag.png?v=9 ":moneybag:") DAO auctions Product Tickets​:ticket:, each representing a surplus Product.  
![:moneybag:](https://async.hackalong.io/images/emoji/twitter/moneybag.png?v=9 ":moneybag:") ↔ ![:house_with_garden:](https://async.hackalong.io/images/emoji/twitter/house_with_garden.png?v=9 ":house_with_garden:") DAO uses some of that profit to buy Sources for future production.  
![:moneybag:](https://async.hackalong.io/images/emoji/twitter/moneybag.png?v=9 ":moneybag:") ↔ ![:money_mouth_face:](https://async.hackalong.io/images/emoji/twitter/money_mouth_face.png?v=9 ":money_mouth_face:") DAO uses some of that profit to payoff external debt held by workers.

SCREEN[Define Product]: List Sources, Work and Time required to create some quantity and quality of Product.  
// For example, how many ft² of land, gallons of water, compost, work, and hours required to make one Avocado.  
// Shows templates for various product types, loose enough to allow new inventions.  
// Qualified workers must validate definition before it is offered as a future product.  
// Physical locations may be constrained in many ways, such as the climate required.

SCREEN[Buy Future Product]: Prepay for Products with either work or money.  
// Shows physical locations, defaulting to those closest to the user.  
// Registered Source types: For example, different Avocado varieties.  
// Qualified Workers or Guilds, their Ratings and Physical locations.

SCREEN[Sell Future Product]: Sign agreement to complete future work.  
// Workers must Qualify before agreement is offered.  
// Workers can optionally join Guilds to spread risk.

SCREEN[Buy Surplus Product]: Pay for Products with either work or money.  
// This is limited to the surplus product available right now.

-------
Core of entry for [FoodSystemVisionPrize.org](http://foodsystemvisionprize.org)

## Phase 0:

![:straight_ruler:](https://async.hackalong.io/images/emoji/twitter/straight_ruler.png?v=9 ":straight_ruler:")![:triangular_ruler:](https://async.hackalong.io/images/emoji/twitter/triangular_ruler.png?v=9 ":triangular_ruler:") ![:boom:](https://async.hackalong.io/images/emoji/twitter/boom.png?v=9 ":boom:") ![:file_cabinet:](https://async.hackalong.io/images/emoji/twitter/file_cabinet.png?v=9 ":file_cabinet:") Create a secure ledger (such as blockchain) to record information.

![:shower:](https://async.hackalong.io/images/emoji/twitter/shower.png?v=9 ":shower:")![:green_salad:](https://async.hackalong.io/images/emoji/twitter/green_salad.png?v=9 ":green_salad:")![:bed:](https://async.hackalong.io/images/emoji/twitter/bed.png?v=9 ":bed:") ⇉ ![:file_cabinet:](https://async.hackalong.io/images/emoji/twitter/file_cabinet.png?v=9 ":file_cabinet:") Record some Goods and Services which can be produced locally.

![:national_park:](https://async.hackalong.io/images/emoji/twitter/national_park.png?v=9 ":national_park:")![:hammer_and_wrench:](https://async.hackalong.io/images/emoji/twitter/hammer_and_wrench.png?v=9 ":hammer_and_wrench:")![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") ⇉ ![:file_cabinet:](https://async.hackalong.io/images/emoji/twitter/file_cabinet.png?v=9 ":file_cabinet:") Record all the Land, Tools and Work required for that production.

![:file_cabinet:](https://async.hackalong.io/images/emoji/twitter/file_cabinet.png?v=9 ":file_cabinet:") : ![:shower:](https://async.hackalong.io/images/emoji/twitter/shower.png?v=9 ":shower:")![:green_salad:](https://async.hackalong.io/images/emoji/twitter/green_salad.png?v=9 ":green_salad:")![:bed:](https://async.hackalong.io/images/emoji/twitter/bed.png?v=9 ":bed:") Offer those future Goods and Services for sale.

## Phase 1:

![:ballot_box:](https://async.hackalong.io/images/emoji/twitter/ballot_box.png?v=9 ":ballot_box:")[![:moneybag:](https://async.hackalong.io/images/emoji/twitter/moneybag.png?v=9 ":moneybag:")] ↔ ![:shower:](https://async.hackalong.io/images/emoji/twitter/shower.png?v=9 ":shower:")![:green_salad:](https://async.hackalong.io/images/emoji/twitter/green_salad.png?v=9 ":green_salad:")![:bed:](https://async.hackalong.io/images/emoji/twitter/bed.png?v=9 ":bed:") Users vote-with-money to buy future Goods and Services.

![:ballot_box:](https://async.hackalong.io/images/emoji/twitter/ballot_box.png?v=9 ":ballot_box:")[![:page_with_curl:](https://async.hackalong.io/images/emoji/twitter/page_with_curl.png?v=9 ":page_with_curl:")![:writing_hand:](https://async.hackalong.io/images/emoji/twitter/writing_hand.png?v=9 ":writing_hand:")![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:")] ↔ ![:shower:](https://async.hackalong.io/images/emoji/twitter/shower.png?v=9 ":shower:")![:green_salad:](https://async.hackalong.io/images/emoji/twitter/green_salad.png?v=9 ":green_salad:")![:bed:](https://async.hackalong.io/images/emoji/twitter/bed.png?v=9 ":bed:") & ![:national_park:](https://async.hackalong.io/images/emoji/twitter/national_park.png?v=9 ":national_park:")![:hammer_and_wrench:](https://async.hackalong.io/images/emoji/twitter/hammer_and_wrench.png?v=9 ":hammer_and_wrench:") Users vote-with-future-work to buy future Goods and Services and also receive access to the Land and Tools required for that production.

![:file_cabinet:](https://async.hackalong.io/images/emoji/twitter/file_cabinet.png?v=9 ":file_cabinet:") : ![:moneybag:](https://async.hackalong.io/images/emoji/twitter/moneybag.png?v=9 ":moneybag:") ↔ ![:national_park:](https://async.hackalong.io/images/emoji/twitter/national_park.png?v=9 ":national_park:")![:hammer_and_wrench:](https://async.hackalong.io/images/emoji/twitter/hammer_and_wrench.png?v=9 ":hammer_and_wrench:") The system uses the money to buy Land and Tools.

![:page_with_curl:](https://async.hackalong.io/images/emoji/twitter/page_with_curl.png?v=9 ":page_with_curl:")![:white_check_mark:](https://async.hackalong.io/images/emoji/twitter/white_check_mark.png?v=9 ":white_check_mark:"): ![:national_park:](https://async.hackalong.io/images/emoji/twitter/national_park.png?v=9 ":national_park:")![:hammer_and_wrench:](https://async.hackalong.io/images/emoji/twitter/hammer_and_wrench.png?v=9 ":hammer_and_wrench:") ⇉ ![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") Land and Tools ownership vests as work is completed.

![:national_park:](https://async.hackalong.io/images/emoji/twitter/national_park.png?v=9 ":national_park:") + ![:hammer_and_wrench:](https://async.hackalong.io/images/emoji/twitter/hammer_and_wrench.png?v=9 ":hammer_and_wrench:") + ![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") ⇉ ![:shower:](https://async.hackalong.io/images/emoji/twitter/shower.png?v=9 ":shower:")![:green_salad:](https://async.hackalong.io/images/emoji/twitter/green_salad.png?v=9 ":green_salad:")![:bed:](https://async.hackalong.io/images/emoji/twitter/bed.png?v=9 ":bed:") ⇉ ![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") When you own Land, Tools and Work, you own those future Goods and Services without purchase.

![:page_with_curl:](https://async.hackalong.io/images/emoji/twitter/page_with_curl.png?v=9 ":page_with_curl:")![:writing_hand:](https://async.hackalong.io/images/emoji/twitter/writing_hand.png?v=9 ":writing_hand:")![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") ↔ ![:page_with_curl:](https://async.hackalong.io/images/emoji/twitter/page_with_curl.png?v=9 ":page_with_curl:")![:writing_hand:](https://async.hackalong.io/images/emoji/twitter/writing_hand.png?v=9 ":writing_hand:")![:construction_worker_man:](https://async.hackalong.io/images/emoji/twitter/construction_worker_man.png?v=9 ":construction_worker_man:") When you buy future Goods and Services with future Work, you implicitly trade future Work with others, and so create a true insurance network.

## Phase 2: ![:compass:](https://async.hackalong.io/images/emoji/twitter/compass.png?v=9 ":compass:")![:abacus:](https://async.hackalong.io/images/emoji/twitter/abacus.png?v=9 ":abacus:") Geoff Lawton of [GeoffLawtonOnline.com](http://geofflawtononline.com)

Survey land for watershed and other Permaculture considerations.

## Phase 3: ![:houses:](https://async.hackalong.io/images/emoji/twitter/houses.png?v=9 ":houses:")![:house_with_garden:](https://async.hackalong.io/images/emoji/twitter/house_with_garden.png?v=9 ":house_with_garden:") Jae Sabol of [OneCommunityGlobal.org](http://onecommunityglobal.org)

Drawup templates for layout of shared properties.

Vet construction plans for shelters and structures with local building codes using natural building techniques…

Use Permaculture to achieve localized self sufficiency.

## Phase 4: ![:factory:](https://async.hackalong.io/images/emoji/twitter/factory.png?v=9 ":factory:")![:hammer_and_wrench:](https://async.hackalong.io/images/emoji/twitter/hammer_and_wrench.png?v=9 ":hammer_and_wrench:")![:robot:](https://async.hackalong.io/images/emoji/twitter/robot.png?v=9 ":robot:") Marcin Jakubowski of [OpenSourceEcology.org 1](http://opensourceecology.org)

Build tools which make tools to achieve modern comfort with far less ecologic and economic costs.

-----




- Link: https://async.hackalong.io/t/the-for-product-model/82
- [Wikipedia.org/wiki/Imputed_rent 1](http://wikipedia.org/wiki/Imputed_rent)
