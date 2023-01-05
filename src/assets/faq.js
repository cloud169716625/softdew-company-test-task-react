const FAQ = [
  {
    FAQ: "I can't create an account when I select my country. What should I do?",
    Answers:
      "Join the waitlist and as soon as your country is supported, we'll let you know so you can get your account set up.",
  },
  {
    FAQ: 'Can I create an account by selecting a country that is supported?',
    Answers:
      'You must be a resident in the country you select and have an address within that country in order to receive your card.',
  },
  {
    FAQ: "I haven't received the confirmation email. What should I do?",
    Answers:
      'Please make sure to check your spam/junk folder. If the email does not appear after attempting to resend, please contact support@cl-cards.com.',
  },
  {
    FAQ: "I haven't received the confirmation text. What should I do?",
    Answers:
      "Please ensure you have entered the correct phone number. If you still haven't received a confirmation text after resending, please contact support@cl-cards.com.",
  },
  {
    FAQ: "I'm not 18 years old and I can't select my country. What can I do?",
    Answers: 'Unfortunately, to be eligible to create an account, you must be 18 years or older.',
  },
  {
    FAQ: 'My nationality is different from my country of residence. Is this a problem?',
    Answers:
      'This is absolutely fine, as long as you have a registered address within your country of residence.',
  },
  {
    FAQ: 'What is Veriff?',
    Answers:
      'Veriff helps us confirm your identity and that you are who you say you are. This keeps us and yourself safe.',
  },
  {
    FAQ: "I haven't received the secure link from veriff on my mobile to complete verfication.",
    Answers:
      'Please ensure you have entered the correct phone number. If the problem persists, please try scanning the QR code. Alternatively, you can contact us at support@cl-cards.com.',
  },
  {
    FAQ: 'My account has been created but verification is pending. What does this mean?',
    Answers:
      "In order to keep us and yourself safe, we need to confirm that the information you have provided us is correct. Certain functionality will be restricted until we have verified your details, but don't worry - we'll be as quick as we can!",
  },
  {
    FAQ: "I can't order the CL card.",
    Answers:
      'Please follow the instructions given to you on the screen. If you are still having issues, please contact support@cl-cards.com.',
  },
  {
    FAQ: 'I need to change my email address.',
    Answers:
      'If you need to change your email address, please contact our support team at support@cl-cards.com.',
  },
  {
    FAQ: 'I need to change my phone number.',
    Answers:
      'If you need to change your phone number, please contact our support team at support@cl-cards.com.',
  },
  {
    FAQ: 'I need to change my physical address.',
    Answers:
      'If you need to change your physical address, please contact our support team at support@cl-cards.com.',
  },
  {
    FAQ: 'I need to close my account',
    Answers:
      'If you would like to close your account, please contact our support team at support@cl-cards.com.',
  },
  {
    FAQ: 'How do I reset my password?',
    Answers:
      'If you are having trouble logging in and need to reset your password, this can be done by clicking the "Having trouble logging in?" link on the login page of the platform. A password reset e-mail will then be sent to the registered e-mail address.',
  },
  {
    FAQ: 'How can I deposit crypto?',
    Answers:
      'You can deposit crypto on your CL card account through Ledger Live or the Ledger Card section by using your Ledger Nano.',
  },
  {
    FAQ: 'What is the loyalty program?',
    Answers:
      'Simply spend with your CL card and you\'ll earn rewards every time you use it (available for UK and US residents only). To enable rewards, head over to the "Card" page and select "Loyalty Program". From there, you can choose the coin in which you would like to receive rewards (Currently available in BTC, USDT, and BXX). At the end of the month, based on the total amount of all your transactions with your card, you will receive the reward amount in your chosen coin to your account/wallet. With BTC and USDT as the rewarded coins, you will receive a 1% reward from the total amount of card transactions during the current month. If you choose BXX, you will receive a 2% reward.',
  },
  {
    FAQ: 'Why has my total balance gone down without me purchasing anything?',
    Answers:
      'As your total balance is tied to the cryptocurrency you hold, this will either increase or decrease depending on market value.',
  },
  {
    FAQ: 'How can I contact someone for support?',
    Answers:
      'You can contact our support team at support@cl-cards.com or via live chat, which is available in the bottom right corner of the screen after logging in.',
  },
  {
    FAQ: 'What times is our support team available?',
    Answers: 'Our support team is available 24/7 via e-mail and live chat.',
  },
  {
    FAQ: 'What languages are available for support?',
    Answers: 'Currently, support is available in English.',
  },
  {
    FAQ: 'How does getting a Stableloan work?',
    Answers:
      'We make borrowing against your crypto easy. Simply select the terms of the Stableloan you want with our calculator (e.g. the amount, term length and interest rate) and we will tell you how much crypto you need to deposit with us to access it.\nWe hold your crypto as security (or “collateral”) against the Stableloan and you will receive your full amount of deposited crypto back to your wallet as soon as you have settled the Stableloan and any outstanding interest payments.',
  },
  {
    FAQ: 'What can I use as collateral?',
    Answers:
      'Currently, you can deposit your Bitcoin (BTC) and Ethereum (ETH) as collateral to borrow against.\n\n\nWe will be expanding this list of options over the coming months and will communicate any updates on this to our users.',
  },
  {
    FAQ: 'What currencies can I receive a Stableloan in?',
    Answers:
      'You can select from USDC, USDT or EURT.\n\nYou can spend these funds on the CL card, withdraw to your self-custodied wallet or exchange for other cryptocurrencies.',
  },
  {
    FAQ: 'How long can I take a Stableloan out for?',
    Answers:
      'When taking out a Stableloan, you may select from the following terms:\n3 months, 6 months, 12 months and 24 months.\nHowever, you can settle it at any time to receive your collateral back to your wallet. You must pay the full principal amount and all interest charges.',
  },
  {
    FAQ: 'How do I pay interest on my Stableloan?',
    Answers:
      'When you take out a Stableloan, we inform you that your principal stablecoin wallet will be automatically debited for the monthly loan interest payment on the corresponding day each month.\nIf your wallet does not have sufficient balance to meet an interest payment, you can make the interest payment later or through the "Stableloans" section of the app. Any Stableloans with late or missing interest payments will be highlighted.\nIf you miss multiple monthly interest payments, our user operations team will be in contact with you about payment schedules and penalties.',
  },
  {
    FAQ: 'Why must I add more collateral to my Stableloan?',
    Answers:
      'In order to handle the risk of a user’s deposited collateral being exceeded by the Stableloan principal, we may liquidate part or all of your collateral if your LTV% significantly exceeds the agreed LTV% of your Stableloan term.\nIf we believe your Stableloan is at risk of this, our user operations team will contact you to add further collateral value to reduce the LTV%.',
  },
  {
    FAQ: 'What is LTV?',
    Answers:
      'LTV refers to "loan-to-value", which is a term that refers to the ratio of a loan compared to the value of an asset provided as collateral.\n\nThe “loan” being the principal amount (which the borrower receives).\nThe “value” being the value of the collateral asset (which the lender receives).',
  },
  {
    FAQ: 'How may I add further collateral to my Stableloan?',
    Answers:
      'You will be able to add collateral value to your Stableloan within the app. If your LTV% has moved from agreed levels by >3%, this will be highlighted within the "Stableloans" section of the app.\nIf you have sufficient crypto in your wallet to make this top up, then it is a simple one click process.\nIf you have funds in other wallets which you wish to exchange for further collateral, we also support an easy user journey for that.\nAlternatively, if you have no funds in your wallet, you can send crypto into your network address. However, please remember that once this is received, you will need to return to the "Stableloans" section to add further collateral.',
  },
  {
    FAQ: 'Can I settle my Stableloan early?',
    Answers:
      'Yes. By repaying the full principal, plus any interest you are eligible for, you can settle your Stableloan and unlock your collateral at any point during or beyond the Stableloan term.',
  },
  {
    FAQ: 'Can I have multiple active Stableloans at one time?',
    Answers:
      'Yes, there is no limit to how many active Stableloans you can have at one time.\nThe handling of one active Stableloan will never affect or have any direct consequences for different active Stableloans which you may have with us.',
  },
  {
    FAQ: 'What is a Cryptodraft?',
    Answers:
      'Cryptodraft offers you the option to spend up to 35% of your collateral value as credit spent on your card.',
  },
  {
    FAQ: 'What is the interest on a Cryptodraft?',
    Answers:
      'The first 10% you spend is interest-free, while the remaining 25% is subject to 1% monthly percentage rate (MPR).',
  },
  {
    FAQ: 'What is MPR?',
    Answers:
      'Monthly-percentage-rate is the nominal interest rate that will accrue on the principal draft amount each month.',
  },
  {
    FAQ: 'How can I repay my Cryptodraft in full?',
    Answers:
      'Select "Settle" and then "Pay Now". This allows you to repay your full Cryptodraft principal amount and any due interest. You can make this repayment from any of your available wallets.',
  },
  {
    FAQ: 'How can I partially repay my Cryptodraft?',
    Answers:
      'Select "Settle" and then "Pay Partial". This allows you to repay any amount you wish, with no minimum. You may wish to reduce the LTV% of an active Cryptodraft or make some of your collateral available for withdrawal. You can withdraw collateral from your active Cryptodraft at any time you want. However. you will not be able to withdraw a collateral amount which increases your LTV to over 10% as a result of this withdrawal.',
  },
  {
    FAQ: 'What is the maximum I can deposit in one time?',
    Answers: '2.5 BTC or 32 ETH at any one time.',
  },
  {
    FAQ: 'What can be used as collateral?',
    Answers: 'BTC or ETH.',
  },
  {
    FAQ: 'What can my digital card be used for?',
    Answers:
      'Your digital card can be used to make online purchases wherever the merchant supports digital cards.',
  },
  {
    FAQ: "I haven't received the secure link from Veriff on my mobile to complete verfication.",
    Answers:
      'Once you have received your CL card, you are able to activate it within the app using the CVV number at the back of the card, completing a purchase using your PIN or typing your PIN in at an ATM machine. Remember - before you can use it online or with contactless, you must complete a purchase using your PIN.',
  },
  {
    FAQ: 'I have just activated my new card - why are attempted payments not being successful?',
    Answers:
      'For the first payment you make with your physical card, you will need to use the PIN code. Your PIN code is something you set during card ordering and is viewable from within the app. If you have any further issues with payments, please contact one of our Support agents via the in-app chat feature.  ',
  },
  {
    FAQ: 'Which payment types are not supported by my payment card?',
    Answers:
      'Due to the nature of the card balance, we do not support balance inquiries at ATMs or elsewhere. Whilst we do support recurring payment authorisations, we do not provide the bank account functionality which would allow you to set up a Standing Order. Pre-authorisation transactions, such as those usually required at gas stations, may also be unsupported.',
  },
  {
    FAQ: 'When I check my balance at an ATM, it shows the balance as 0 although I have funds in my account.',
    Answers:
      'Due to the nature of the card, any balance inquiries at an ATM will show as 0. The true balance linked to your card can be viewed within your CL account within the platform.',
  },
  {
    FAQ: 'What is the maximum number of wallets I can link to my card?',
    Answers: 'You may link a maximum of 5 wallets to your payment card at any one time.',
  },
  {
    FAQ: 'How do we generate the available balance shown for your CL card?',
    Answers:
      'The available balance figure shown for your CL card is an estimate. We dynamically generate this figure by calculating the total fiat value of your linked cryptocurrency wallets. We calculate the sum of your assets against live market rates and then apply our liquidation fee percentage.',
  },
  {
    FAQ: 'What are the prerequisites for successfully ordering my debit card?',
    Answers:
      'Before ordering your CL card can begin, we require all users to pass KYC / Account verification. You will then need to ensure your account is funded. You will also need to be in one of our Supported Countries for card ordering. Please see the Card User Terms on our website for more details.',
  },
  {
    FAQ: 'What are the limitations of my payment card?',
    Answers:
      'See table of contents for: User restrictions table (Terms and Conditions found in "Manage Card" tab).',
  },
  {
    FAQ: 'What should I do if my card has not arrived?',
    Answers:
      'Please allow for a two week grace period and double-check you ordered your card to the correct address. If you are sure this has all been completed, please contact our friendly agents via the in-app chat or at support@cl-cards.com',
  },
  {
    FAQ: 'My card is lost, stolen or damaged, can i get a replacement?',
    Answers:
      'If you\'ve lost your card or your card has been damaged stolen, please log in and select "Settings". From there, you\'ll have to option to freeze your card and report your card as lost, stolen or damaged. You can also order a replacement card.',
  },
  {
    FAQ: 'How do I activate my card when it has arrived?',
    Answers:
      'When your physical card has arrived, you will see an element in the "Card" section of your app to activate it by using the 3-digit CVV number on the back of your card.',
  },
  {
    FAQ: 'What should I do if my card is blocked?',
    Answers:
      'The card may be blocked if you have reported it as lost or stolen. Please contact support@cl-cards.com if you require further assistance.',
  },
  {
    FAQ: 'Why am I unable complete payments at merchant terminals?',
    Answers:
      "If your card is not working at merchant terminals, the card may have been blocked. If so, please got to the ATM and select 'PIN SERVICES'. Then, select 'UNBLOCK PIN'. We advise you wait at least 15 minutes before attempting another transaction after unblocking your card.",
  },
  {
    FAQ: 'I have forgotten my PIN.',
    Answers:
      'If you\'ve forgotten your PIN, please log in and select "Settings". From there you can enter your password and view your pin.',
  },
  {
    FAQ: "How can I view my card's PIN?",
    Answers:
      'You can view your card PIN from within the app. To do this, please go to the "Card Management" section of your app and select "View PIN" - we will require you to enter your account password before revealing this.',
  },
  {
    FAQ: "Can I change my card's PIN?",
    Answers:
      'If you need to change your PIN, please go to your nearest ATM and you can complete this action from there.',
  },
  {
    FAQ: 'Crypto to crypto exchange',
    Answers: '1%',
  },
  {
    FAQ: 'Crypto to fiat exchange',
    Answers: '1%',
  },
  {
    FAQ: 'Fiat to crypto exchange',
    Answers: '0%',
  },
  {
    FAQ: 'Card spend (liquidation of cryptocurrency)',
    Answers: '2%',
  },
  {
    FAQ: 'Crypto withdrawal',
    Answers: '0.4%',
  },
];

export default FAQ;
