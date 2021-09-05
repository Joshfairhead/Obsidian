[[Holochain]] [[Artifacts]] [[Capabilities on Holochain]]

- The structure  of a capabilities token is built into holochain, they are the security model
- The first capabilities token is the thing that you think of as your identity attributes. The source chain entry first has DNA and second your ID, which goes up to headers. Your ID is now a capabilities token that says this is the public key of a private key that has the capability to write entries to this chain; your giving yourself permission to write to your chain. You can then write an entry that gives another ID an ability to read another post
- Create private post
- Create entry (capabilities grant) that allows second parties ID to read private post
- Pass hash of the capability grant entry to second party (capabilities claim)
- When they want to read the post they follow the hash “and do a send receive”
- Structure of the token:
    - Array of keys (who’s allowed to read)
    - Array of what (functions they are allowed to call - parameratised or not)
    - This can be updated/deleted (remains in chain but status can be changed)
- Capabilities tokens give you the ability to construct any kind of access control that you want, and are far more secure than ACL’s as you can specify exactly who can call which functions and pre parameterise them
- Hash of the grant is your API key, the grant tells you what API functions you’re allowed to do, and if its non transferable it has to be signed by you
- This is the core building blocks of the Holochain security model that allows you to compose whatever permissions you want compose. 
- mark miller ewrites was one of the first people to come up with capabilities
- Confused deputy problem is the ACL illustrated problem
