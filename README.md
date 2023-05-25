# AmazingBlock
A tool to unblock (most) sites in school or the office.
# Documentation
## *.nor.* pages
Nor pages specify that they should not be redirected to the apps page if the user is authenticated. This does not disable authorization checks.
## Setting the PIN
To specify the PIN open **scriptlet.js** in the editor and replace the value with *PIN* of your choice.
## Enabling AmazingBlock
1. Duplicate **enable.html**
2. Change the word "enable" to the response from [this](https://www.random.org/strings/?num=1&len=10&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new) site.
3. Open that page on the user's machine
4. Delete page after the user is able to access the site
## Securing AmazingBlock in the event of a breach
In **scriptlet.js** replace the PIN with one of your choice to kick all users.
## Enabling a contact button
Set *contactButton* to *true* in **scriptlet.js**
## Disabling all access to AmazingBlock
Set *enabled* to *false* in **scriptlet.js**
