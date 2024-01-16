# Website Sara-li

## Setup

We use the static site generator called [Hugo](https://gohugo.io/) to dynamically generate the content of the website. If you have not setup Hugo then you can learn about that on the [Quickstart guide](https://gohugo.io/getting-started/quick-start/). A few additional details:

- The Windows binaries for the Hugo application (v0.1.121) on their [Github](https://github.com/gohugoio/hugo/releases/latest) appears to be unsigned. On Windows, this triggers the real-time protection when you try to start or use the application. If you do not trust the executable then you can not generate the website.
- The documentation assumes you have direct access to the Hugo executable on the command line. This can be setup on Windows via the environment variables, specifically the PATH variable. You can learn more about updating the PATH variable on various articles online, such as this article on [HowToGeek](https://www.howtogeek.com/787217/how-to-edit-environment-variables-on-windows-10-or-11/).