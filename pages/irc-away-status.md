# Away Status on IRC

_This was somewhat inspired by
[http://sackheads.org/~bnaylor/spew/away_msgs.html](http://sackheads.org/~bnaylor/spew/away_msgs.html "http://sackheads.org/~bnaylor/spew/away_msgs.html"),
but I felt that I needed something with a softer tone._

## The Problem & Misconceptions

A lot of IRC clients and scripts think it is a great idea to broadcast mass 
notifications and change your nick when you set an away status. This is not in
line with the design of the IRC. When you go take a shower, we don't need to
see:

    -- Buddy is now known as Buddy|Showering
    * Buddy is away: Taking a shower!

### Who cares if you broadcast your updates to all channels?

You'd be surprised. When your client actually sends a message announcing your
status change, everyone's clients in that will now have marked the channel as
active. Some clients may even beep. People will be disappointed if it turns out
to be one of the fifty people in the channel going to eat pizza. And if you're
in many channels, every single one is now marked as being active.

### But I'm just changing my nick.

That's better, since most clients will not react as aggressively, but this is
still problematic in a few ways:

* Users that are looking to send you a private message will now get stuck
  unless they go figure out your current nick.
* Users that have you on a "buddy list" that works by WHO, WHOIS, or ISON might
  erroneously believe you are now off-line.
* Channel statistics generators will now either omit some of your statistics or
  get confused.
* Users that have interfaces which change size based on the longest nick will
  now have a smaller chat area. Actually speaking with your extra-long nick
  makes this worse for clients that indent all text based on the longest nick.

If you change your nick for a specific status, then you're really creating
problems.

    -- Buddy is now known as Buddy|Showering
    -- Buddy|Showering is now known as Buddy|DryingOff
    -- Buddy|DryingOff is now known as Buddy|Poptarts4Brkfst
    -- Buddy|Poptarts4Brkfst is now known as Buddy
    <Buddy> I'm back!

I can't imagine very many scenarios where that is helpful to anyone.

### I thought IRC was a chat platform. AIM, Skype, etc. all show status changes in the chat area!

Think of IRC as more of a bulletin board. Except for private messages, you are
in a channel with several other people &mdash; possibly hundreds. Everyone is
coming and going all the time. Nobody cares about every single status change.
You can keep your client connected (or use a bouncer) and never miss out on
anything. Being away is pretty irrelevant.

AIM and other such instant messenger platforms are primarily used for
one-on-one conversations where coming and going is much more likely to be
important.

This is also why
[highlights](irc-leaving-messages.html "IRC - Leaving Messages") are
important.

## The Solution

IRC has a built-in away status system. Almost nobody I have met is even aware
of this.

* Disable automatic away/back announcements.
* Disable automatic nick changes.
* Make sure you send the actual AWAY command to the IRC server.
* Configure your nick list to mark users which are away.

You can find someone's exact away status by using /whois. Most IRCDs will send
you a user's away status if you send them a private message. If your IRC client
marks away users in the nick list, you can tell if they are away just by
looking at the nick they always use. "Buddy lists" typically make use of this
as well, and may even let people that use them configure their clients to spam
them about your status changes if they want.

### The Solution for Victims

It's possible to filter out this type of spam. Thankfully, most of it is in one
of a few predictable formats:

    * nick is away: status
    * nick is back: status (gone for duration)
    * nick is back
    * nick is now away - Reason : status
    * nick is no longer away : Gone for duration

Most clients also make it very easy to filter nick changes as well.

