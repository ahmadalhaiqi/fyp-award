const nominees = [
  {
    tab: "A1",
    dept: "EEEP",
    id: "EE092997",
    name: "Kiran Sohail",
    supervisor: "Hazlinda Bte Hakimie",
    title: "Robotic Arm in Hazardous Situations",
    cat: "Research & Development",
    judges: [
      {
        name: "Dr. Nur Badariah Ahmad Mustafa",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Assoc. Prof. Ir. Dr. Chong Kok Hen",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "A2",
    dept: "EEEP",
    id: "EE098800",
    name: "Lee Jun Yin",
    supervisor: "Assoc. Prof. Dr. Siti Fazlili Abdullah",
    title: "Enhancing the efficiency of CIGS thin film solar technology",
    cat: "Research & Development",
    judges: [
      {
        name: "Dr. Nur Badariah Ahmad Mustafa",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Assoc. Prof. Dr. Jamaludin bin Omar",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "A3",
    dept: "EEEP",
    id: "EE096565",
    name: "Chan Wei Hwa",
    supervisor: "Siti Fazlili Abdullah, Assoc. Prof. Dr.",
    title:
      "A Numerical Simulation Approach. A Method For Improving Thin Film Solar Cells Efficiency.",
    cat: "Research & Development",
    judges: [
      {
        name: "Dr. Nur Badariah Ahmad Mustafa",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Assoc. Prof. Dr. Jamaludin bin Omar",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "A4",
    dept: "EEEP",
    id: "EP096383",
    name: "Nur Izzah Binti Ibrahim",
    supervisor: "Assoc Prof Ir Dr Miszaina Osman",
    title:
      "Analysis of Non-conventional Lightning Protection System Performance For Commercial Buildings",
    cat: "Research & Development",
    judges: [
      {
        name: "Ir. Razali Budin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Muhamad Safwan Bin Abd Rahman",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "A5",
    dept: "EEEP",
    id: "EP096735",
    name: "Noraini Nasution Binti Zamanhuri",
    supervisor: "Ya'Akob Raja Omar, Dr.",
    title:
      "The Investigation In Finding The Best Thermoelectric Generator Location For Higher Power Output",
    cat: "Research & Development",
    judges: [
      {
        name: "Ir. Razali Budin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Muhamad Safwan Bin Abd Rahman",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "A7",
    dept: "EEEP",
    id: "EP097661",
    name: "Siti Chadijah Binti Mohd Nasir",
    supervisor: "Mohd Helmi Mansor",
    title:
      "Multistage Artificial Immune System for Static VAR Compensator Planning",
    cat: "Research & Development",
    judges: [
      {
        name: "Ir. Razali Budin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Muhamad Safwan Bin Abd Rahman",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "A8",
    dept: "EEEP",
    id: "EP091250",
    name: "Muhammad Hasrul Bin Idris",
    supervisor: "Sabarina Jaafar",
    title: "Smart farming methods for mini garden with solar systems",
    cat: "Research & Development",
    judges: [
      {
        name: "Ir. Mohamed Zaimir bin Mohamed Suffian",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Muhamad Safwan Bin Abd Rahman",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "B1",
    dept: "EEEP",
    id: "CC094502",
    name: "Sethubathy A/L Narayanan",
    supervisor: "Ahmed Mubarak Al-Haiqi",
    title: "Web Based Gamification Assignment Access",
    cat: "Software Development",
    judges: [
      {
        name: "Anthony Samy Rajamanickam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Goh Chin Hock",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "B2",
    dept: "EEEP",
    id: "CC096078",
    name: "Noor Iddeanna Binti Idris",
    supervisor: "Ahmed Mubarak Al-Haiqi",
    title:
      "Using Gamification to Achieve Energy Efficiency Based on Behavior Change",
    cat: "Software Development",
    judges: [
      {
        name: "Anthony Samy Rajamanickam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Goh Chin Hock",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "B4",
    dept: "EEEP",
    id: "EE096544",
    name: "Muhammad Hazwan Bin Harun",
    supervisor: "Dr Tiagrajah V. Janahiraman",
    title:
      "Power Quality Disturbances Classification Using Wavelet Transforms and Support Vector Machine",
    cat: "Software Development",
    judges: [
      {
        name: "Anthony Samy Rajamanickam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Assoc. Prof. Ir. Dr. Chong Kok Hen",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "B5",
    dept: "EEEP",
    id: "EE096979",
    name: "Muhammad Syazani Bin Muhammad Syafiq",
    supervisor: "Dr. Prajindra Sankar Krishnan",
    title:
      "Mobile Application e-Worksheet for Undergraduate Lab Experiments with User Input Interface",
    cat: "Software Development",
    judges: [
      {
        name: "Ir. Mohamed Zaimir bin Mohamed Suffian",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Goh Chin Hock",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "B6",
    dept: "EEEP",
    id: "EP094861",
    name: "Moaz Mohamed Daoud Sheikh Idris",
    supervisor: "Ida Suzana Bte Hussain",
    title: "Development of a space vector controlled inverter model using FPGA",
    cat: "Software Development",
    judges: [
      {
        name: "Ir. Razali Budin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Tan Ching Sin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "C1",
    dept: "EEEP",
    id: "EE097234",
    name: "Al-Kharasani, Wabel Mo-Hammed Ab-Dulwahab",
    supervisor: "Ahmad Wafi Bin Mahmood Zuhdi, Dr",
    title: "Solar Tracking System Using Mi-crocontroller",
    cat: "System Design",
    judges: [
      {
        name: "Anthony Samy Rajamanickam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Tan Ching Sin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "C2",
    dept: "EEEP",
    id: "EE096948",
    name: "Amira Syafika Bt Kamaruzaman",
    supervisor: "Hazlinda Bte Hakimie",
    title: "IOT Medical Waste Monitoring System",
    cat: "System Design",
    judges: [
      {
        name: "Ammar Zolkipli",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Goh Chin Hock",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "C3",
    dept: "EEEP",
    id: "EE096581",
    name: "Ali Amran Bin Nasrun",
    supervisor: "Cheah Cheng Lai, Prof. Madya Dr",
    title: "Solar Photovoltaic Performance Monitoring Based On IOT",
    cat: "System Design",
    judges: [
      {
        name: "Anthony Samy Rajamanickam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Assoc. Prof. Ir. Dr. Chong Kok Hen",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "C4",
    dept: "EEEP",
    id: "EE094474",
    name: "Mohd Adam Bin Mohamad Azib",
    supervisor: "Ayuniza Ahmad",
    title: "Voice Control Home Appliances Using Microcontroller",
    cat: "System Design",
    judges: [
      {
        name: "Ammar Zolkipli",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Nur Badariah Ahmad Mustafa",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "C6",
    dept: "EEEP",
    id: "EE097104",
    name: "Faris Syahmi Samidi",
    supervisor: "Pn. Intan Shafinaz Bte Mustafa",
    title: "Intelligent Sensor Following Shopping Cart",
    cat: "System Design",
    judges: [
      {
        name: "Ammar Zolkipli",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Assoc. Prof. Ir. Dr. Chong Kok Hen",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "C7",
    dept: "EEEP",
    id: "EE096743",
    name: "Wan Nurul Nazifa Binti Wan Ahmad Hazmi @ Megat Puteh",
    supervisor: "Dr. Prajindra Sankar Krishnan",
    title:
      "Smart Restroom Occupancy Notification System Via Projector Display For Examination Hall Management",
    cat: "System Design",
    judges: [
      {
        name: "Ammar Zolkipli",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Assoc. Prof. Dr. Jamaludin bin Omar",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "C8",
    dept: "EEEP",
    id: "EP096359",
    name: "Che Mohamad Azfar Bin Che Afri",
    supervisor: "Assoc. Prof. Dr. Ungku Anisa Bte Ungku Amirulddin",
    title: "Modelling of Tidal Energy Power Generation System for Malaysia",
    cat: "System Design",
    judges: [
      {
        name: "Ir. Mohamed Zaimir bin Mohamed Suffian",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Tan Ching Sin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "C9",
    dept: "EEEP",
    id: "EP092901",
    name: "Vasudevan S/O Mani",
    supervisor: "Aishah Binti Mohd Isa.Dr",
    title: "Design And Development Security System For Safety Box",
    cat: "System Design",
    judges: [
      {
        name: "Ir. Mohamed Zaimir bin Mohamed Suffian",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Tan Ching Sin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "D1",
    dept: "ME",
    id: "ME097133",
    name: "Muhammad Arif Bin Lukeman",
    supervisor: "Yip Chan Heng",
    title: "Design and Development of a Swarf Removal Device",
    cat: "Design & Analysis",
    judges: [
      {
        name: "Zaimah Bte. Hasan",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Meenaloshini  Satgunam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "D2",
    dept: "ME",
    id: "ME096742",
    name: "Surajh Jonathan James",
    supervisor: "Hassan Bin Mohamed, Dr.",
    title:
      "Design and development of a self-balancing lightweight transport system",
    cat: "Design & Analysis",
    judges: [
      {
        name: "Ir. Tajul Ariffin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Meenaloshini  Satgunam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "D3",
    dept: "ME",
    id: "ME096483",
    name: "Dhiviandran Chadaran",
    supervisor: "Mr Muhammad Fairuz Bin Abdul Jalal",
    title:
      "Design And Development Of Transmission Module For Home Service Robot",
    cat: "Design & Analysis",
    judges: [
      {
        name: "Ir. Tajul Ariffin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Meenaloshini  Satgunam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "D4",
    dept: "ME",
    id: "ME096498",
    name: "Tutisvarran Viswanathan",
    supervisor: "Dr Firas Basim Ismail",
    title:
      "Design and Implementation of Intelligent Office Chair for Correct Sitting Postures : New Generation",
    cat: "Design & Analysis",
    judges: [
      {
        name: "Ir. Tajul Ariffin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Meenaloshini  Satgunam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "D5",
    dept: "ME",
    id: "ME096517",
    name: "Afiqah Aleena Binti Azraimee",
    supervisor: "Dr Firas Basim Ismail",
    title:
      "Design and Implementation of Thermal Energy Harvesting Technology for COE UNITEN Utilities",
    cat: "Design & Analysis",
    judges: [
      {
        name: "Muhammad Fairuz Bin Abdul Jalal",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Zaimah Bte. Hasan",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "D6",
    dept: "ME",
    id: "ME095542",
    name: "Muhammad Mirza Danial Bin Zainee",
    supervisor: "Iszmir Nazmi Bin Ismail",
    title: "Design and Development of Marine Debris Collecting Robot",
    cat: "Design & Analysis",
    judges: [
      {
        name: "Ir. Tajul Ariffin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Meenaloshini  Satgunam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "D7",
    dept: "ME",
    id: "ME096722",
    name: "Kanneshkumar A/L Arunasalan",
    supervisor: "Assoc.Prof.Dr.Mohamed Ansari M.N.",
    title:
      "Design Enhancement and Analysis of Thermoelectric Generator System (TEGs)",
    cat: "Design & Analysis",
    judges: [
      {
        name: "Ir. Tajul Ariffin",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Zaimah Bte. Hasan",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "D8",
    dept: "ME",
    id: "ME097206",
    name: "Gajenthran Rajakumaran A/L Kanniappan",
    supervisor: "Norhazwani Abd Malek",
    title: "Design and Development of a Stream Litter Collector",
    cat: "Design & Analysis",
    judges: [
      {
        name: "Muhammad Fairuz Bin Abdul Jalal",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Zaimah Bte. Hasan",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "E1",
    dept: "ME",
    id: "ME095492",
    name: "Haravin Marimuthu",
    supervisor: "Gopinathan Muthaiyah",
    title:
      "Acid Esterification of Fish Oil for Ethyl Ester Production Using Homogeneus Catalyst",
    cat: "Experimental Research",
    judges: [
      {
        name: "Dr. Abdoulhadi Borhana",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Hassan Bin Mohamed",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "E2",
    dept: "ME",
    id: "ME095466",
    name: "Anindra Kugarajah",
    supervisor: "Juniza Binti Md Saad",
    title: "Pyrolysis Kinetic Analysis Of Poly Propylene",
    cat: "Experimental Research",
    judges: [
      {
        name: "Dr. Hassan Bin Mohamed",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Zubaidi Faiesal Bin Mohamad Rafaai",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "E3",
    dept: "ME",
    id: "ME095564",
    name: "Pavithran S/O Chandran",
    supervisor: "Dr.Ewe Lay Sheng",
    title:
      "The effect of different thickness on Microstructure and Acoustic properties of oil palm empty fruit bunch natural fibre with density 120kg/m^3",
    cat: "Experimental Research",
    judges: [
      {
        name: "Dr. Abdoulhadi Borhana",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Zubaidi Faiesal Bin Mohamad Rafaai",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "E4",
    dept: "ME",
    id: "ME096132",
    name: "Wan Nurul Athirah Binti Wan Nor Yuhaidi",
    supervisor: "Hassan Bin Mohamed",
    title:
      "Assessment of HVAC system performance and efficiency in minimizing energy consumption",
    cat: "Experimental Research",
    judges: [
      {
        name: "Dr. Abdoulhadi Borhana",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Muhammad Fairuz Bin Abdul Jalal",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "E5",
    dept: "ME",
    id: "ME096492",
    name: "Santhia A/P Silbam",
    supervisor: "Vignesh Vicki",
    title:
      "Investigation on the effect of cellulose on the biodegradability of Kenaf/cellulose reinforced polymer biocomposites",
    cat: "Experimental Research",
    judges: [
      {
        name: "Zaimah Bte. Hasan",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Zubaidi Faiesal Bin Mohamad Rafaai",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "E6",
    dept: "ME",
    id: "ME096493",
    name: "Sasidevan A/L Munusamy",
    supervisor: "Dr. Pua Fei Ling @ Grace Pua",
    title:
      "Synthesis and Characterization of Carbide Lime Waste Derived Solid Base Catalyst for Biodiesel Production",
    cat: "Experimental Research",
    judges: [
      {
        name: "Dr. Hassan Bin Mohamed",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Zubaidi Faiesal Bin Mohamad Rafaai",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "E7",
    dept: "ME",
    id: "ME096484",
    name: "Fatin Nabilla Khairul Basir",
    supervisor: "Adlansyah Abd Rahman",
    title:
      "Design and development of rapid carboniser for water hyacinth eco-charcoal production",
    cat: "Experimental Research",
    judges: [
      {
        name: "Dr. Abdoulhadi Borhana",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Hassan Bin Mohamed",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "E8",
    dept: "ME",
    id: "ME096491",
    name: "Rameswaran A/L Balasubramaniam",
    supervisor: "Assoc.Prof.Dr.Mohamed Ansari.M.N.",
    title:
      "Effect of fibre loading and orientation on the mechanical properties of Kenaf/Carbon fibre hybrid composite for Automotive attenuator application",
    cat: "Experimental Research",
    judges: [
      {
        name: "Prof. Dr. Md. Mujibur Rahman",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Zubaidi Faiesal Bin Mohamad Rafaai",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "E9",
    dept: "ME",
    id: "ME097236",
    name: "Mohammad L.M.Shaath",
    supervisor: "Assoc.Prof.Dr.Mohamed Ansari M.N.",
    title:
      "Characterization of Tungsten trioxide reinforced Poly(lactic acid) nanocomposites for 3D printing process",
    cat: "Experimental Research",
    judges: [
      {
        name: "Dr. Abdoulhadi Borhana",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Prof. Dr. Md. Mujibur Rahman",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "F1",
    dept: "ME",
    id: "ME096481",
    name: "Ainaa Syahirah Binti Ahmad Anuar",
    supervisor: "Saiful Hasmady Bin Abu Hassan, Dr.",
    title:
      "Development of a Spreadsheet-based Fuel Cell Simulator: Modeling 2D Flow in a Serpentine Channel",
    cat: "Modelling & Simulation",
    judges: [
      {
        name: "Prof. Dr. Md. Mujibur Rahman",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Muhammad Fairuz Bin Abdul Jalal",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "F2",
    dept: "ME",
    id: "ME096137",
    name: "Fatin Fatihah Binti Abdul Majid",
    supervisor: "Ir. Dr. Hasril Hasini",
    title:
      "Numerical investigation on heat transfer and fluid flow characteristic of the effect of various oblique fin arrangements in liquid cold plate (LCP)",
    cat: "Modelling & Simulation",
    judges: [
      {
        name: "Prof. Dr. Md. Mujibur Rahman",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Muhammad Fairuz Bin Abdul Jalal",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "F3",
    dept: "ME",
    id: "ME096480",
    name: "Ahmad Safwan Bin Ahmad Khusairi",
    supervisor: "Norhazwani Abd Malek",
    title:
      "Investigation of Syngas Combustion at Gas Turbine Combustor for Power Generation using CFD Approach",
    cat: "Modelling & Simulation",
    judges: [
      {
        name: "Prof. Dr. Md. Mujibur Rahman",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Hassan Bin Mohamed",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "G1",
    dept: "CE",
    id: "CE096169",
    name: "Shanmugan Nagappan",
    supervisor: "Dr. Agusril",
    title:
      "The effect of short drink cans and steel fibers on the flexural performance f concrete beams",
    cat: "Structure & Materials",
    judges: [
      {
        name: "Wong Jee Khai",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Shuhairy Bin Norhisham",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "G2",
    dept: "CE",
    id: "CE096512",
    name: "Shaikh Muhammad Mubin Bin Shaik Ahmad Fadzil",
    supervisor: "Dr. Agusril",
    title:
      "An experimental study on how steel and drink can fibers affect the impact resistance in fiber-reinforced concrete",
    cat: "Structure & Materials",
    judges: [
      {
        name: "Wong Jee Khai",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Shuhairy Bin Norhisham",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "H1",
    dept: "CE",
    id: "CE097093",
    name: "Ainul Zakiyyah Binti Zulkifli",
    supervisor: "Rasyikin Binti Roslan",
    title: "Bio-Cardiidae For Soft Soil Improvement",
    cat: "Highway & Geotechnical",
    judges: [
      {
        name: "Dr. Agusril",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Ing. Zarina Binti Itam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "H2",
    dept: "CE",
    id: "CE099018",
    name: "Siti Natassia Binti Nazri",
    supervisor: "Norlela Ismail",
    title:
      "A feasibility study on the application green technology for highway features",
    cat: "Highway & Geotechnical",
    judges: [
      {
        name: "Wong Jee Khai",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Shuhairy Bin Norhisham]",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "H3",
    dept: "CE",
    id: "CE095254",
    name: "Hana Alias Binti Zulkifli",
    supervisor: "Norlela Ismail",
    title:
      "A study towards the comfortability of walking in Wangsa Maju, Kuala Lumpur",
    cat: "Highway & Geotechnical",
    judges: [
      {
        name: "Dr. Agusril",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Ing. Zarina Binti Itam]",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "H4",
    dept: "CE",
    id: "CE092984",
    name: "Nur Hezrina Hashrim",
    supervisor: "Dr. Chow Ming Fai",
    title:
      "Development of fibre mat using water hyacinth for soil erosion control",
    cat: "Highway & Geotechnical",
    judges: [
      {
        name: "Dr. Agusril",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Ing. Zarina Binti Itam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "H5",
    dept: "CE",
    id: "CE098703",
    name: "Muayad Saleh Ahmed Obaid",
    supervisor: "Dr. Mohamed Hafez",
    title: "Use fly ash and molten slag to build stone columns",
    cat: "Highway & Geotechnical",
    judges: [
      {
        name: "Dr. Agusril",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Ing. Zarina Binti Itam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "H6",
    dept: "CE",
    id: "CE097235",
    name: "Abduallah Alkeelany",
    supervisor: "Dr.Mohamed Ahmed Hafiz",
    title:
      "replacement of aggregate with boiler slag and fly ash in slag column",
    cat: "Highway & Geotechnical",
    judges: [
      {
        name: "Dr. Agusril",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Dr. Ing. Zarina Binti Itam",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "J1",
    dept: "CE",
    id: "CE096109",
    name: "Intan Nurfadhliana Binti Fairus",
    supervisor: "Datin Prof Ir Dr Lariyah Mohd Sidek",
    title:
      "Study on Good Agricultural Practices for Enhancement of Stormwater System in Cameron Highland",
    cat: "Water & Waste-water",
    judges: [
      {
        name: "Dr. Md. Shabbir Hossain",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Pn. Norfariza binti Ismail",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "J2",
    dept: "CE",
    id: "CE097393",
    name: "Saleh Mohmad Saleh Alowaidat",
    supervisor: "Gasim Hayder Ahmed Salih, Dr.",
    title:
      "Application of activated carbon and water hyacinth in domestic wastewater treatment",
    cat: "Water & Waste-water",
    judges: [
      {
        name: "Dr. Md. Shabbir Hossain",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Pn. Norfariza binti Ismail",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "J3",
    dept: "CE",
    id: "CE097013",
    name: "Mohammed Ahmed Abdullah Abdulwasea",
    supervisor: "Gasim Hayder Ahmed Salih, Dr.",
    title: "Quality Assessment of Roof Harvested Rainwater",
    cat: "Water & Waste-water",
    judges: [
      {
        name: "Dr. Md. Shabbir Hossain",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Pn. Norfariza binti Ismail",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "J4",
    dept: "CE",
    id: "CE097428",
    name: "Mohamed Imad Eldin Khalafalla Ahmed",
    supervisor: "Dr. Md. Shabbir Hossain",
    title: "Application of activated carbon in removing pollutants from water",
    cat: "Water & Waste-water",
    judges: [
      {
        name: "Wong Jee Khai",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Shuhairy Bin Norhisham",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "J5",
    dept: "CE",
    id: "CE098135",
    name: "Mohammed Abdullah Mahmoud Sabri",
    supervisor: "Dr. Chow Ming Fai",
    title:
      "Heavy metal and pesticides treatment using water hyacinth biochar in agricultural runoff",
    cat: "Water & Waste-water",
    judges: [
      {
        name: "Dr. Md. Shabbir Hossain",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Pn. Norfariza binti Ismail",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  },
  {
    tab: "J6",
    dept: "CE",
    id: "CE096510",
    name: "Putri Nur Iman Binti Khairuddin",
    supervisor: "Sir Nazirul Mubin",
    title: "The kinetic study of biofilm in an IFAS system",
    cat: "Water & Waste-water",
    judges: [
      {
        name: "Dr. Md. Shabbir Hossain",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      {
        name: "Pn. Norfariza binti Ismail",
        marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  }
];

export default nominees;
