  const RCT = [
    { 
      index: 1, 
      label: 'What would cause the nerve of a tooth to die or become infected?', 
      content: [`The nerve of a tooth can be damaged if a tooth is cracked or fractured. Deep decay or trauma, like a blow to the tooth or from a fall may also cause damage.`,
      `Even when carefully performed, every filling and crown has an impact on the tooth’s nerve health, so teeth with large fillings or crowns are more likely to need a root canal.`]
    },
    { 
      index: 2, 
      label: 'What are the benefits of having root canal treatment?', 
      content: ['A tooth can be saved that would otherwise have to be removed due to infection or nerve damage.', 'Chronic inflammation that occurs with infection may be eliminated. This inflammation is harmful to your overall health and the infection can spread to other parts of the body, including your brain and heart, and can be fatal.', 'Pain or sensitivity caused by the damaged nerve can be relieved.']
    },
    { 
      index: 3, 
      label: 'Are there risks associated with root canal treatment?', 
      content: ['Although 90% of root canal treatments are successful, a small number will require a second root canal procedure or additional treatment on the root tip.', 'Even with the best care, root canal treatment may not resolve all the infection or inflammation. In those cases, the tooth may still be lost, usually due to a hidden deep crack in the tooth or a root canal system too small to be adequately cleaned and sealed.']
    },
    { 
      index: 4, 
      label: 'Will further treatment be needed following root canal treatment?', 
      content: ['On a back tooth, a crown is needed to lower the risk of future cracking or fracture from chewing forces. If the tooth already has a healthy, well-sealed crown, the dentist may be able to seal the root canal without replacing the crown.', 'A front tooth in good condition may only need a bonded filling to seal and support it. Your dentist will discuss what support your specific tooth will need.']
    },
    { 
      index: 5, 
      label: 'Are there any alternatives to undergoing root canal treatment?', 
      content: 'The only alternative would be to remove the tooth.'
    },
  ];
  
  const Crown = [
    {
      index: 1,
      label: 'How is a crown made?',
      content: [
        'An impression or scan is made of the tooth that has been shaped for a crown.', 
        'Using the impression or scan, a crown is made.',
        'The crown is cemented permanently on the tooth and is not removeable.'
      ]
    },
    {
      index: 2,
      label: 'What materials are used to make a crown?',
      content: [
        'All ceramic.', 
        'Ceramic fused to a metal foundation.',
        'Metal alloy, usually gold.'
      ]
    },
    {
      index: 3,
      label: 'What are the benefits of a crown?',
      content: [
        'Replaces missing or broken tooth structure.', 
        'Protects a tooth weakened by a large fi lling or decay from breaking.',
        'May improve the bite.',
        'Can improve the appearance of a damaged or discolored tooth.',
        'May decrease the risk of future tooth decay.'
      ]
    },
    {
      index: 4,
      label: 'What are the risks of a crown?',
      content: [
        'Tooth sensitivity that may last several months.', 
        'The crowned tooth may need root canal treatment which could be a six percent risk or higher, depending on previous treatment.',
        'It may not copy the natural tooth in terms of shape, size or color.',
        'Recession of the gum may occur and as a result the junction of the crown and tooth may show.',
        'Should the natural teeth change color due to age or bleaching, the color of the crown may not match.'
      ]
    },
    {
      index: 5,
      label: 'Are there any alternatives to a crown?',
      content: [
        'A large pre-existing fi lling may seal the tooth from decay but may not protect the tooth from breaking.', 
      ]
    },
    {
      index: 6,
      label: 'How long will a crown last?',
      content: [
        'Depending upon the material used, eighty percent of crowns may be expected to last up to twenty years.', 
        'Excessive biting pressure on the teeth may cause a crown to chip, break, or wear out.',
        'Decay may occur on the root surface of the tooth if not covered by the crown.',
        'Your dentist will provide insight and guidance as to the choice of crown.'
      ]
    },
  ];

const Bridge = [
  {
    index: 1,
    label: 'How is a tooth-supported bridge made?',
    content: [
      'The supporting teeth next to the missing teeth are shaped for crowns.',
      'An impression or digital scan is made of the teeth and used to fabricate the bridge.',
      'The bridge consists of the missing teeth called pontics attached to the crowns.',
      'The bridge is cemented on to the teeth and is not removeable.'
    ]
  },
  {
    index: 2,
    label: 'What materials are used to make a tooth-supported bridge?',
    content: [
      'Tooth-colored ceramic.',
      'Ceramic fused to a metal foundation.',
      'Metal alloy-usually gold and other precious metals.',
    ]
  },
  {
    index: 3,
    label: 'What are the benefits of a tooth-supported bridge?',
    content: [
      'It replaces missing teeth.',
      'It helps maintain the bite and prevents teeth from shifting.',
      'It may improve the smile, restore speech and the ability to chew.',
    ]
  },
  {
    index: 4,
    label: 'What are the risks of a tooth-supported bridge?',
    content: [
      'Sensitivity associated with a crowned tooth that may last several months.',
      'A crowned teeth may need root canal treatment which could be a six percent risk or higher depending on previous treatment.',
      'It may not copy the natural teeth in terms of shape, size or color.',
      'Decay may occur on any root surfaces of the teeth not covered by the crowns.',
      'Recession of the gums may occur, and as a result, the junction of the crowns and teeth may show.',
      'Food will become trapped under the bridge causing a possible risk to the supporting teeth of decay or gum disease.',
      'Should the natural teeth change color due to age or bleaching, the color of the bridge will no longer match.',
      'An excessive bite force may cause the bridge to chip, break or wear.'
    ]
  },
  {
    index: 5,
    label: 'What are the alternatives to a tooth-supported bridge?',
    content: [
      'Replacement of the missing teeth with implant-supported crowns.',
      'Replacement of the missing teeth with a removeable partial denture.',
      'Leave the space as it is.',
    ]
  },
  {
    index: 6,
    label: 'How long will a tooth-supported bridge last?',
    content: [
      'Ceramic fused to metal bridges have a survival rate of approximately 94% after 5 years',
      'Ceramic-only bridges have a slightly lower survival rate of approximately 88% after 5 years.',
      'Your dentist will provide guidance as to the choice of bridge material.',
    ]
  },
]

const wisdomTeeth = [
{
  index: 1,
  label: 'When is an impacted wisdom tooth removal indicated?',
  content: [
    `If there is an associated:
    <br />
    – Infection
    <br />
    – Cavity
    <br />
    – Cyst or tumor
    <br />
    – Destruction of the adjacent tooth and bone.`,
    'If your dentist predicts future problems. Most people eventually need to have an impacted wisdom tooth removed.'
  ]
},
{
  index: 2,
  label: 'What are the risks of having an impacted wisdom tooth removed?',
  content: [
    `Damage to the nerves that carry feeling to the face which is usually temporary but may on rare occasions be permanent.`,
    'Damage to the adjacent tooth and its supporting tissues.',
    'Fracture of the jaw.',
    'The area where the tooth was removed may become infected or develop into a painful condition called a Dry Socket.',
    'Surgical complications and slower post-operative healing tend to increase with age.'
  ]
},
{
  index: 3,
  label: 'What are the alternatives to having an impacted wisdom tooth removed?',
  content: [
    'When there is a high risk of nerve damage during its removal it may be possible to remove part of the tooth in a procedure called a coronectomy.',
    'Monitor the wisdom tooth over time for changes in appearance.',
  ]
},
{
  index: 4,
  label: 'What may happen if an impacted wisdom tooth is not removed?',
  content: [
    'A cavity may occur in the wisdom or adjacent tooth.',
    'Infection of the overlying gum called pericoronitis. This may be associated with severe pain, a foul taste and the inability to open or close the lower jaw.',
    'The formation or a cyst around the tooth with the risk of possible infection and resulting pain and swelling.',
    'Continual inflammation around the adjacent tooth and the consequent destruction of its supporting bone or resorption of its roots.',
    'In certain cases, there may be no negative effects.'
  ]
},
]

const Veneers = [
  {
    index: 1,
    label: 'What materials are used to create veneers?',
    content: [
      'Porcelain veneers are made in a dental laboratory and bonded to your teeth.',
      'Composite resin veneers are sculpted directly by your dentist and bonded to your teeth.'
    ]
  },
  {
    index: 2,
    label: 'What are the benefits of veneers?',
    content: [
      'The size, shape and color of your teeth can be customized for a beautiful smile.',
      'The teeth retain their strength because little to no tooth structure is removed.'
    ]
  },
  {
    index: 3,
    label: 'What are the risks of veneers?',
    content: [
      'Staining at the edges of porcelain or composite resin veneers over time.',
      'Darkening of composite resin veneers as they age.',
      'Sensitivity to hot and cold, usually temporary in nature.',
      'Chipping or breaking, particularly in patients with untreated bite problems.',
      'Color mismatches between veneers and the natural teeth as the latter darken with age.',
      'Gum recession exposing root surfaces which are darker than the veneers.'
    ]
  },
  {
    index: 4,
    label: 'Are there any post-treatment limitations to veneers?',
    content: [
      'To reduce the risk of chipping your veneers you should avoid:',
      'Biting or chewing anything other than food.',
      'Using your teeth for abnormal activities such as opening packages or biting your nails.',
    ]
  },
  {
    index: 5,
    label: 'What are the alternatives to veneers?',
    content: [
      'Bleaching can lighten teeth, but cannot alter shape or size.',
      'Porcelain crowns can result in improved appearance, but more tooth removal is required.',
    ]
  },
]

const inlayOnlay = [
  {
    index: 1,
    label: 'What materials are in an Inlay/Onlay?',
    content: [
      `Inlays are made of two types of materials:
      <br />
      – Porcelain - most like a natural tooth in color
      <br />
      – Gold Alloy - strongest and most conservative in its preparation`,
    ]
  },
  {
    index: 2,
    label: 'What are the benefits of having an Inlay/Onlay?',
    content: 
      `Inlays and Onlays restore a tooth to its natural size, shape and–if using
      porcelain–color. They improve the strength, function and appearance of a broken
      down tooth that may otherwise be lost.`,
  },
  {
    index: 3,
    label: 'What are the risks of having an Inlay/Onlay?',
    content: 
      `In having an inlay/onlay, some inherent risks exist both to the tooth and to the
      restoration itself. <br/><br />The risks to the tooth are: <br/>
      Preparation for an inlay/onlay weakens tooth structure and permanently alters
      the tooth underneath the restoration.
      Preparing for and placing an inlay/onlay can irritate the tooth and cause “post-
      operative” sensitivity which may last for up to 3 months.
      The tooth underneath the inlay/onlay may need root canal treatment about 5% of
      the time during the lifetime of the tooth.
      If the cement seal at the edge of the inlay/onlay is lost, decay may form at the
      juncture of the restoration and tooth.
      <br />
      <br />
      What are the risks to the inlay/onlay:
      Porcelain may chip and metal may wear over time.
      If the tooth needs a root canal treatment after the inlay/onlay is permanently
      cemented, the procedure may fracture the restoration and the inlay/onlay may
      need to be replaced.`,
  },
  {
    index: 4,
    label: 'What are the alternatives to Inlays/Onlays?',
    content: [
      'Alternatives to placing an inlay/onlay are to either place a crown or a direct restoration such as tooth colored or silver fillings.',
      'Crowns are less conservative in their preparation and therefore weaken remaining tooth structure more than inlays/onlays.',
      'Composite and amalgam restorations remove decay and may restore teeth to their original form but are limited because they:Do not improve the strength of broken down teeth.',
      `Do not improve the long term function and aesthetics of broken down teeth as well as inlays/onlays.`,
    ] 
  },
  {
    index: 5,
    label: 'How can an existing bite affect an Inlay/Onlay?',
    content: 'Excessive bite forces may lead to the restoration chipping or breaking.'
  },
  {
    index: 6,
    label: 'Are there any post-treatment limitations once I have an Inlay/Onlay?',
    content: [
      'Porcelain on an inlay/onlay may have a good color match with adjacent natural teeth when the restoration is placed but less of a match as your natural teeth age.',
      'An inlay/onlay may chip or break if used for abnormal activities (e.g., biting fishing line, sewing thread or finger nails, opening bottles).'
    ]
  },
]

const PostCore = [
  {
    index: 1,
    label: 'What material is in a Post and Core?',
    content: 'The post is made out of a fibrous resin material and Cores are made a Tooth Colored “composite” filling material'
  },
  {
    index: 2,
    label: 'What are the benefits of a Post and Core?',
    content: 'A post and core holds a restoration on to a tooth which has too little remaining structure to retain the restoration itself.'
  },
  {
    index: 3,
    label: 'What are the risks of a Post and Core?',
    content: `Having a post and core involves some inherent risks both to the remaining tooth
    structure and to the post and core itself:
    The root of the tooth may be perforated when placing the post, necessitating the
    extraction of the tooth
    Under stress, the post may torque the root of the tooth and cause it to fracture,
    necessitating the extraction of the tooth
    Under stress, the cement holding the post and core on to the tooth can fail
    causing the post and core to leak, loosen or fall out`
  },
  {
    index: 4,
    label: 'What are the alternatives to having a Post and Core?',
    content: `The alternative to having a post and core is to have the tooth extracted and
    replaced with: <br />
    – A dental implant <br />
    – A bridge <br />
    – A partial denture`
  },
  {
    index: 5,
    label: 'How can an existing bite affect a Post and Core?',
    content: `Excessive biting forces or untreated bite problems may lead to: <br />
    – The post and core breaking, loosening or leaking <br />
    – The tooth in which the post and core has been placed breaking`
  },
  {
    index: 6,
    label: 'Are there any post-treatment restrictions once I have a Post and Core?',
    content: `A post and core may break, loosen or cause the tooth to break if chewing very
    hard or sticky foods. <br />
    – Broken down tooth built up with a metal post andcomposite core <br />
    – Broken down tooth built up with a metal post and amalgam core`
  },
]

const dentalProcedures = [
  { 
    index: 1, 
    label: 'What materials are in a tooth-colored filling?', 
    content: [
      'Mixed particles of tooth-colored resins designed to match the color of the natural tooth with glass particles added for strength.',
      'Light-sensitive adhesive particles that bind the components together allowing them to be shaped.'
    ]
  },
  { 
    index: 2, 
    label: 'What are the benefits of a tooth-colored filling?', 
    content: [
      'It matches the color of the teeth.',
      'It can be added to a tooth in order to alter its shape.',
      'As it is bonded onto the tooth, it requires little removal of healthy tooth structure.',
      'It is completed in one appointment.',
      'Hardening by a specialized light permits immediate chewing after placement.'
    ]
  },
  { 
    index: 3, 
    label: 'What are the risks of a tooth-colored filling?', 
    content: [
      'It may discolor over a period of time.',
      `The larger the filling the greater the risk it may chip or fracture.`,
      `As with other dental filling materials:
      <br />
      – Placement may cause the tooth to be sensitive to cold for up to 3 months.
      <br />
      – Decay can occur in the natural tooth around the edges of the filling.'`,
      'The filling seals the tooth but does not protect it from breaking should its size result in a weakened tooth.'
    ]
  },
  { 
    index: 4, 
    label: 'What are the alternatives to a tooth-colored filling?', 
    content: [
      'A silver [amalgam] filling.',
      'A gold or porcelain [tooth-colored ceramic] filling.',
    ]
  },
  { 
    index: 5, 
    label: 'What are possible post-treatment concerns after a tooth-colored filling is placed?', 
    content: [
      `Bite problems or using the teeth for anything other than chewing food may cause:
      <br />
      – A gold or porcelain [tooth-colored ceramic] filling.
      <br />
      – The filling to break, loosen or loose its seal, causing sensitivity decay and possible tooth fracture.
      <br />
      – An increase in the risk of the tooth in which the filling has been placed cracking or breaking.`,
      'Bleaching the teeth will not lighten a tooth-colored filling.',
    ]
  },
];

export { RCT, Crown, Bridge, wisdomTeeth, Veneers, inlayOnlay, PostCore, dentalProcedures }