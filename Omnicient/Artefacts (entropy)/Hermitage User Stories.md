---
Tags: []
---
Related: 
# Hermitage User Stories

## What is Hermitage? 
- Hermitage is a data store you can use to securely store your credentials. It has great ease of use, no more hassle with logins. But it's doing a lot more then that too.
- Hermitage is a GDPR compliant data store leveraging human centric design and putting users back in the driving seat. This relieves companies from storing their data while at the same time, significantly de-risking their activities. For users, they can port their data to services they trust without vendor lock-in. Hermitage works with Holochain.

## Question: As a user, how do I use my personal data in a service?
- Situation: I want to use my personal data in a service
- Answer: Your personal data is stored on your source chain embedded in a persona. Personas are a key:value pair. Profiles are just a mapping. When interacting with a hApp the profile containing the mapping matches with the persona, which then responds with and populates the value. If there is no match found you can associate the field it with any piece of data already stored in your persona. For instance your persona might store your name under "First Name" while and App might request the "name field", in which case you use the field mapper.

### Question: As a user, how can I read my persona data?
- Situation: I want to rummage through my data to find a particular byte
- Answer: If you remember the context you saved it under, you can navigate to it directly as everything is stored on your source chain. If you don't you can search or filter contexts via the UI.

### Question: As a user, how do I create data to populate my persona?
- Situation: I’m a new user and would like to make use of online services
- Answer: When you fill out an online profile it gets stored in your persona. You can also create profiles directly from within the identity manager. In future you may be able import already existing web2 profile data.

# Technical
### Question: How do Happs communicate?
- Situation: Personas and happs need to listen to eachother and update upon events happening either side
- Answer: Websockets (socket.io)

----

# How to use Hermitage
## There are several ways you could use Hermitage. Here we give some examples for other Odyssey Momentum teams

### Balance the Grid/ Energy Singularity
**Challenge**: Vattenfall invites you to help in the challenge of incentivizing consumers to communicate energy demand and production to allow all stakeholders to balance the grid.

**Household persona and profiles**: One of the persona’s you maintain is designed to orchestrate interactions around your house. It will build several profiles that allows energy companies/security companies/electrical car companies.. to identify you as the authorized party to interact with. Here we elaborate on the smart meter and energy profiles

-   Smart meters will get a profile (smart meter profile) and be identified as belonging to the household persona.
- The smart meter profile can actively send out messages of usage and so help to get predictions on usage by the energy company.
- The smart meter profile can log generated energy by PV panels, hybrid systems etc..
- The smart meter profile can act as a legal party to negotiate pricing on the real time energy market.
- Third parties are able to access an energy profile and read your energy usage and offer insights (if you wish so)
- The energy profile (smart meter profile and other household profiles) can become part of an energy grid grouping of profiles. (say you and your neighbours, especially if you occupy one building)
- The energy grid group profile can act as a legal party to negotiate pricing on the real time energy market

### ConsciousCities
**Challenge**: The City of the Hague invites you to help in the challenge of automating access to and governance of a public digital ecosystem for citizens and stakeholders within the Living Lab Scheveningen: An innovation playground for digital solutions in public space. Join us to solve real societal problems with digital innovations.

**Scenario**: Our approach with our SSI will be to locally and physically identify your selves to the city’s authorities while safekeeping yr privacy. There will be a city persona authoring all the required profiles..

- Local "membranes" of people coming together bottom up and forming agreements to articulate "the we". This might be a local neighbourhood defining its boundaries to decide whos entitled to resident parking or not, and further, navigating the rules for if visiting friends can have parking.
- Conditional agreements are also interesting; get the city to agree that if 50 people want a bench they'll put it in. Then get 50 people to digitally say they want a bench. No budget can be released.

**City persona with city profiles:**
City sensor persona: These profiles (organized in a city sensor persona) give users the ability to design what happens with the information picked up by sensors in a smart city. For instance you are allowing to be tracked in case of emergency at all times. But you don’t want any commercial actors to track your where-abouts.
- Sensor data would be a happ you have access to, you would store a profile for that happ in your persona. If it wants your location data you might grant it given a particular set of conditions.
- Covid -19 and other “emergency scenario’s”. You allow to be tracked and traced anonymously but to at all times share your Covid-19 condition (negative/positive at dd/mm/y) with others that may be affected.


### Outcompete-destructive-systems
Challenge: VMware, DAML and Dell Boomi invite you to help in the challenge of incentivizing consumers and organizations to accelerate decarbonization by creating a CO2 footprint measurement, accountability and investment tool

 **Self Reporting profiles**
- Self reporting profile: This persona is active to track and log certain activities that are beneficial to nature 2.0
- Energy consuming profile: Tracking your use of energy sources and contribution to energy sources
- Self sufficiency profile: tracking how self sufficient your lifestyle is: fi, grown and eaten own harvest, composted x amount, build a rain water tank  


### Inclusive safety community/ Healthcare
The Dutch Police and the Dutch Public Safety Alliance invite you to help in the challenge of matching the right citizen to the right situation emergency in order to help professionals and create a community that contributes to safety

-  **Capabilities Personas** Within your capabilities personas there may also be profiles that show your first aid capabilities in case of emergency
- General Health Condition Profile: Your general (private) data/ patient profile to be shared in case of emergency (only) and fi shielded from insurance companies
- Diabetes Health Condition Profile: As per example if you are a diabetes patient, this profile will track all you medicine use per reporting moment. Reporting moments being: a blood measurement (enabled with sensor and internet connection to log all measurements during the day) a dosis of insuline being taken (again sensor and internet connection to report dosage)
- First Aid Capabilities profile. When verified as a trained first aid volunteer, this profile can make your location visible to nearby notifications by Safety Organizations in case of emergency. Fi when someone is having a cardiac arrest and you are able to help them you will receive a notification if this is happening on a location near where you are present at the moment.

---

# Where do we want to take Hermitage?
## Long term vision
It's 2030 and the SDG goals have been exceeded thanks to an internet that was reinvented to work just like nature. Collective intelligence saved the day; local people learnt to self organise, share resources, accept and embrace differences and deal with complexity - largely in part with the aid of artificial general intelligence, which learnt from everyone on the planet.

# UN SDG contribution

> 6.9 "by 2030, provide legal identity for all, including birth registration". Generative identity (natural) is the onramp into SSI and legal credentials.

> 16.6 "develop effective, accountable and transparent institutions at all levels" We are working with a data integrity layer that enables effective and transparent accounting.

> 16.10 "ensure public access to information and protect fundamental freedoms, in accordance with national legislation and international agreements" Information is stored with the users, who can grant access to those in their Web of Trust reducing information asymmetry.

## The problem that we are currently trying to solve: vendor lock-in
Vendor lock-in has centralised the web and turned it into a digital dystopia where users are algorithmically manipulated by the highest bidders. These silos are also a honeypot for hackers wishing to exploit user credentials for identity theft, the fines for the Equifax hack was over half a billion alone and user liability for identity fraud was similar!

## How do we solve the vendor lock-in with Hermitage
Hermitage is a GDPR compliant data store leveraging human centric design and putting users back in the driving seat. This relieves companies from storing their data significantly de-risking their activities. For users, they can port their data to services they trust without vendor lock-in.

## How Hermitage is going to be good for companies as well
Native GDPR compliance means that there's no need for a security team, data controller, or exorbitant server costs. The risk of a data breach is eliminated. Going forward portable KYC stored user side will reduce ~60% of banking overheads due to in-person checks, in accordance with the Payments Service Directive. We reduce friction for users and stakeholders.
- #### We could use help with:
	We'll need authorities to recognize and accept various credentials in accordance with EU regulation. Adoption from Odysseys ecosystem of stakeholders would be awesome. 

### Building blocks worth mentioning
We can provide a "profile" module which acts as mechanism to store data user side in a GDPR compliant way. Which fields do you need for your app to function? Integrate our module for that and whamo SSI.
- #### We could use help with:
	We would like developers to integrate our "profiles" module to securely store personally identifying information.

### Legal and regulatory aspects
According to the Max Planck institute, public keys stored on a public blockchain may legally be considered as personally identifying information. We do not do this, its stored privately on an agents edge device. In relation to the Payment Services Directive (PSD2), we'll shortly be enabling users to store their own KYC credentials and making them portable.
- ### We Could use help with:
	We need to understand the nuances of PSD2 to larger degrees.

### Open source license and strategy
As we are using Holochain as our protocol level infrastructure we'll be using the Cryptographic Autonomy Licence (CAL) as required. This licence transfers to any software built on top and essentially says that Apps cannot store user data, or build backdoors to revoke cryptographic keys.
- #### We could use help with
	We need legal Jedis to give the CAL licence a good looking at to find out if it's suitable for business adoption and as permissionless as the MIT licence.

### What makes our identity special?
Our product stores identity in its various incarnations (Integral lens). It leverages both Generative identity (natural) and SSI (legal)
- #### We could use help with
	Cryptographers would be nice to talk to regarding UUID generation and hashing functions. We would also like to understand the Blake2B-256 encryption to greater depths

### Why is the CSO not freaking out?
We are utilising from a capabilities paradigm (C-list) rather than permissions paradigm (ACL). This greatly reduces (if not resolves) the issues with escalating privileges to take control of a host computer. We don't use servers either, so theres nothing to attack other than a distributed hash table. Front end and back end are hashed together as a "DNA" so we can be sure that the front end hasn't been modified for malicious purposes.

### Come break us down
We'd like to test these assumptions with security experts. Please try to break our software!!

### International standards
Our product Hermitage integrates the DID standard by the W3C. We are also using a capabilities paradigm with research that dates back to Xerox Parc. The cryptography used was a NIST finalist for Sha-3. We're also aware of the OASIS work for DKMS.