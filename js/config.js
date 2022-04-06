var respecConfig = {
  // specStatus currently supported
  // WW, GN-WV: Werkversie
  // CV, GN-CV: Consultatie versie
  // VV, GN-VV: Vastgestelde versie (of Versie ter vaststelling)
  // DEF, GN-DEF: Definitieve versie
  // EO: Einde ondersteuning, verouderde versie, vervangen door nieuwe versie
  // TG: Versie teruggetrokken
  // BASIS, GN-BASIS: 'geen status'
  specStatus: "DEF",

  // SpecType currently supported
  // NO: "Norm"
  // ST: "Standaard"
  // IM: "Informatiemodel"
  // PR: "Praktijkrichtlijn"
  // HR: "Handreiking"
  // WA: "Werkafspraak"
  // AL: "Algemeen"
  // BD: "Beheerdocumentatie"
  // BP: "Best Practice"
  specType: "ST",

  // subtitle will be shown below title, can be omitted 
  //subtitle: "",

   // The specification's publish domain, which is used to publish the specification
  // the url in the header thisVersion is generated like `<conf.nl_organisationPublishURL>/<conf.pubDomain>/<specStatus>-<specType.toLowerCase()>-<conf.shortName>}-conf.publishDate>/`
  pubDomain: "dk",

  // The specification's "short name", which is the name used in NL_Respec URLs
  shortName: "ebms",

  publishDate: "2022-04-11",
  previousPublishDate: "2019-05-16",

  publishVersion: "3.3.1",
  previousPublishVersion: "3.3",


  // An array of person objects describing the editors of the document
  // this can be simple or more elaborated
  editors: [{
    name: "Logius Centrum voor Standaarden",
    company: "Logius",
    url: "https://logius.nl/standaarden",
  }
  ],
  // An array of person objects describing the authors of the document
  // this can be simple or more elaborated
  authors: [{
    name: "Logius Centrum voor Standaarden",
    url: "https://logius.nl/standaarden",
  }
  ],
  // The github option allows you associate your specification with a repository on GitHub.
  github: "https://github.com/Logius-standaarden/Digikoppeling-Koppelvlakstandaard-ebMS2",

  // The URL of your test suite, gets included in the specification's headers.
  // testSuiteURI: "https://portaal.digikoppeling.nl/CV/home.html",

  // With long algorithms in a specification, it can be useful to allow readers to click on variables marked up with <var> (e.g., Let <var>elem</var> be ...).
  // highlightVars: true,

  // Controls if linked "§" section markers are added to a document
  addSectionLinks: true,

  // Lints for accessibility issues using axe-core
  a11y: false,

  // A number indicating the maximum depth of the table of contents. Defaults to 0 which includes all levels.
  maxTocLevel: 4,

  // Shows links to alternate formats (such as PDF, ePub) in the document header.
  // alternateFormats: [{
  //     label: "html",
  //     uri: "https://publicatie.centrumvoorstandaarden.nl/api/oauth/static.html",
  //   },
  //   {
  //     label: "pdf",
  //     uri: "https://publicatie.centrumvoorstandaarden.nl/api/oauth/static.pdf",
  //   },
  // ],

  // You can use markdown to write ReSpec based documents.
  // format: "markdown",
  // TODO  Do not suse this config, it may cause a problem., use instead:
  // <section data-format="markdown" data-include="<filename>.md"></section>

  alternateFormats: [
  {
    label: "pdf",
    uri: "Digikoppeling-Koppelvlakstandaard-ebMS2.pdf",
  },
  ],


  // For Consultatieversies (specStatus="GN-CV") there is a default text in the section "Status of this document" that contains an emailaddress for feedback and comments on the document.
  nl_emailComments: "digikoppeling@logius.nl",

  // this parameter will add the tag_name of the latest release to the document Title
  // only set this parameter when a release has been set
  nl_addReleaseTagTitle: true,

  // if you use a single document for your spec, which uses more than one markdown H1 header, e.g. '# inleiding'
  // this configuration can be set to make sure that the alle H1 headers and navigation bars are preserved
  nl_markdownSplitH1sections: true,

  // nl_organisationName is used for some company specific values in the header (and Sotd)
  // currently supported: Logius and Geonovum (default)
  nl_organisationName: "Logius",

  // prefix for the names of company specific css, svg and ico prefixes
  // defaults to "GN-"
  nl_organisationPrefix: "LS-",

  // if nl_markdownEmbedImageInFigure is set to true images in markdown generated content will be surrounded with <figures> element
  // so that figures can be linked are be a part of table of figures
  nl_markdownEmbedImageInFigure: true,

  // this url points to the folder where organsation specific css files are stored
  // defaults to https://tools.geostandaarden.nl/respec/style/ if not set
  nl_organisationStylesURL: "https://publicatie.centrumvoorstandaarden.nl/respec/style/",

  // nl_organisationPublishURL points to organisation specifica publication page, used in header
  // defaults to  https://docs.geostandaarden.nl/"
  nl_organisationPublishURL: "https://publicatie.centrumvoorstandaarden.nl/",

  // nl_logo refers to company logo
  // defaults to https://tools.geostandaarden.nl/respec/style/logos/Geonovum.svg
  nl_logo: {
    src: "https://publicatie.centrumvoorstandaarden.nl/respec/style/logos/figure-logius.svg",
    alt: "Logius",
    id: "Logius",
    height: 77,
    width: 44,
    url: "https://www.logius.nl/standaarden",
  },

  // If you need to include a one-off reference that isn't in the SpecRef database or
  // if you need to override an existing reference with specific content, then you can use this configuration option.
  localBiblio: {
    NEN3610: {
      href: "https://www.nen.nl/nen-3610-2011-a1-2016-nl-217738",
      title:
        "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten",
      authors: [""],
      date: "Maart 2011",
      publisher: "Nederlands Normalisatie-instituut",
    },
    "Digikoppeling Architectuur": {
      href: "https://publicatie.centrumvoorstandaarden.nl/dk/architectuur/2.0vv/",
      title:
        "Digikoppeling Architectuur",
      authors: ["Logius Centrum voor standaarden"],
      date: "4 Maart 2021",
      publisher: "Logius",
    },
    "ebXML CPPA V 2.0": {
      href: "http://www.ebxml.org/specs/ebcpp-2.0.pdf",
      title:
        "Collaboration-Protocol Profile and Agreement Specification Version 2.0",
      authors: ["Oasis"],
      date: "september 2002",
      publisher: "Oasis",
    },
    ebMS3: {
      href: "https://docs.oasis-open.org/ebxml-msg/ebms/v3.0/core/os/ebms_core-3.0-spec-os.html",
      title:
        "Collaboration-Protocol Profile and Agreement Specification Version 2.0",
      authors: ["Ian Jones", "Pete Wenzel"],
      date: "October 2007",
      publisher: "Oasis",
    },
    UMMR10: {
      href: "https://unece.org/DAM/cefact/umm/UMM_Revision_10_2001.zip",
      title: "UMM Revision 10",
      authors: [""],
      date: "2001",
      publisher: "UN/CEFACT",
    },
    UMMUG: {
      href: "https://www.unece.org/fileadmin/DAM/cefact/umm/UMM_userguide_220606.pdf",
      title: "UN/CEFACT Modeling Methodology (UMM) User Guide",
      authors: [""],
      date: "2003",
      publisher: "UN/CEFACT",
    },
    "Digikoppeling Beveiligingsdocument": {
      href: "https://publicatie.centrumvoorstandaarden.nl/dk/beveilig/",
      title: "Digikoppeling Beveiligingsstandaarden en voorschriften",
      date: "1 Februari 2021",
      publisher: "Logius",
    },
    "Deployment Guide 1.1": {
      href: "http://www.oasis-open.org/apps/org/workgroup/ebxml-iic-deployment-profile-template-intro-100406.doc",
      title: "Deployment Profile Template For OASIS ebXML Message Service 2.0",
      authors: ["Pete Wenzel", "Jacques Durand"],
      date: "June 2005",
      publisher: "OASIS",
    },
    "PKI Policy": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/pogramma-van-eisen",
      title: "Programma van Eisen (PKIoverheid)",
      publisher: "Logius",
    },
    "PKI CA": {
      href: "https://www.logius.nl/diensten/pkioverheid/aansluiten-als-tsp/toegetreden-vertrouwensdienstverleners",
      title: "Toegetreden vertrouwensdienstverleners",
      publisher: "Logius",
    }

  }

};
