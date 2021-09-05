---
Tags: [Artifacts, Designs, Deliverables]
---
Related: [[Josh]] [[JoshFairhead]] [[Design]] [[Identity]] [[Identity Primers]] [[Identity Vault Stories]] [[Identiti]] [[Not-A-Bot]] [[ePassports]]

# NotABot

#### Criterea
-  Confirm that Alice has access to an ePassport (no need to check if it's hers)
-  Make sure if Alice uses her Dutch ePassport her chances of also getting away with using her Swiss ePassport are minimised.
-  Allow Alice to prove humanness or uniqueness as required without imparting any personal information (and ideally making sure she's only asked for the former unless the latter is critical in terms of, for example, democracy or wealth distribution)
-  Allow any platform / network / community to cap the number of accounts for which any one individual can provide proof of humanness at any number greater than 1 (a cap of 1 would be proof-of-uniqueness of course)
-  Prevent the platform / network / community from correlating Alice's accounts
-  Ensure a 1:1 pairing of smartphone to ePassport (i.e. the same ePassport can never be used on multiple devices concurrently)
-  Allow Alice to change her smartphone
-  Enable revalidation by the app (to frustrate a market in proven accounts forming; to check Alice is still alive)
-  Enable revalidation by ePassport (e.g. requiring Alice to go through the 60-second ePassport process again after 30 days; and annually perhaps)

Note: There are some other criteria associated with the threats identified in the Gdoc, but if you can do these 9 then we're onto something!!


#### Links
- [Not-a-bot](https://docs.google.com/document/d/1Avh1X6sCrQbIncGayxr1luRDdu6MO1ICylwp_Y4-GJw/edit?ts=5fbd0e50#) - Old Doc
- [Not-a-bot](https://docs.google.com/document/d/1ZbbjQ7YnlXGxW0bXSrht1XdIljdEmVvN58YQm5M6L4c/edit?ts=5ff9da31#heading=h.pcsvnajcrih8) 
- [New UX document](https://www.sketch.com/s/d2895f85-1878-4af3-8193-16117d53c840)
- [Slides](https://docs.google.com/presentation/d/1W1jZwE1Ysc2wk2nKJ8K5WepwylczFbYRF8zVJVzRwJk/edit#slide=id.p)
    - [Format](https://guykawasaki.com/the-only-10-slides-you-need-in-your-pitch/)
- [ZK HackMD](https://hackmd.io/pBYhDGzkQnmpUdWEBXJkCQ?both)
- [Feasibility HackMD](https://hackmd.io/HUnjsOX1TfqOy0alMkd3QQ)
- [UX sketch document](https://www.sketch.com/s/d2895f85-1878-4af3-8193-16117d53c840)
    - 12:20
    - 1) are emai lcredentials necessary? (probably for now)
    - 4) what is NFS? If passport is good, whay back to passport not recognised?
    - 7) Can we notify law enforcement that the passport has been recovered?... maybe a good complimentary service for interpol!
        - // comment from [[Maija]]: I believe once doc is flagged it must be destroyed, the system works one way. However, I must confirm this fact
    - 8) Request call to both holders is unnecessary. User trying to register is enough to make a deduction. The second account can be blocked and a call can be made then if necessary. Making two calls would increase the burden of support. 
    - 10) Notification to partners maybe not necessary?
    - 19) Diagram requires some interpretation, connections are confusing though understandable. Would worry if a developer were to interpret. 
    - 20) Revalidation pending is a confusing path for me, not sure what its representing. Could just be my mental model.
    - 21) Same as 20.
    - 22) Requires a little interpretation as "scan qr code" section but otherwise the flow makes sense
    - 25) If a user is over the service provider account limits, then delete account (retract humanness is ambiguous). Data should be downloadable before account deletion. The end of the flow is also a bit confusing, maybe my mental model though.
    - 26) Ditto to 25. 
    - 28) "waiting to send request again" (??)
    - 30) Confusing diagram, unnecessary info? When user selects no to confirm uniqueness verification, path should stop.
    - 13:28 Break
    - 14:00 Start
    - 34) Uniqueness instructions probably need to move profile and tie it into unique persona. Personas can have uniqueness, profiles probably not unless associated within the unique persona. Profiles probably shouldn't be able to have uniqueness reassigned or users can hop it around for different accounts. 
    - 35) Again, uniqueness/humanness model feels off. 
    - 41) Removal of uniqueness/humanness allows account hopping. Maybe ok, but can be problematic. Account data should be downloaded and account frozen. Perhaps can be re-associated with another persona/profile
    - 42) Why does the phone need to be unique? I'm thinking an authy like flow is fine with duplicate accounts on multiple devices. The rest of the flow is fine. 
    - 44) Sign out confimation stage doesnt make sense to me, may be fine but the detail wants clarification
    - 45) makes sense but removal of uniqueness/humanness may cause issues with account hopping
    - 14:34 - Call from Arnold
    - 15:07 - Start again
    - 48) Confirm/delete action; reusing passport requires manual verification - can it not just start working and block old account, which would then require manual verification if it somewhow reactivates?
    - 49) unblock account request has two flows. Assuming the green means that no verification is needed
    - 15:22 finish
- [Technical basis](https://docs.google.com/document/d/18hlHpaRVeXUq4DmMdEt4M4yGlgqSx0iLAQqRWlDYYBU/edit#heading=h.5y6rniad3pfa)
- [ICAO/I-Checkit access info](https://www.icao.int/publications/Documents/9303_p3_cons_en.pdf)
- [EU Crypto Standards doc](https://www.sogis.eu/documents/cc/crypto/obsolete/SOGIS-Agreed-Cryptographic-Mechanisms-1.0.pdf)


