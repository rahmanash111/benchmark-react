import React, { useEffect, useState } from "react";
import Construction from "../../assets/Images/construction.png";
import { motion } from "framer-motion";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


// Canada
import acadiaLogo from '../../assets/University/Canada/acadia-university-logo-canada1.webp';
import algomaLogo from '../../assets/University/Canada/Algoma_University_wordmark.svg.png';
import algonquinLogo from '../../assets/University/Canada/algonquin.png';
import assiniboineLogo from '../../assets/University/Canada/Assiniboine.png';
import bowValleyLogo from '../../assets/University/Canada/bowvalley.svg';
import brockLogo from '../../assets/University/Canada/brock.svg';
import collegeOfNewCaledoniaLogo from '../../assets/University/Canada/cnc.PNG';
import collegeOfRockiesLogo from '../../assets/University/Canada/rockies.png';
import cambrianLogo from '../../assets/University/Canada/cambrian.svg';
import camosunLogo from '../../assets/University/Canada/camosun.png';
import canadoreLogo from '../../assets/University/Canada/canadore.svg';
import capilanoLogo from '../../assets/University/Canada/capilano.svg';
import cbuLogo from '../../assets/University/Canada/cbu.jpg';
import centennialLogo from '../../assets/University/Canada/centennial.jpg';
import coastMountainClgLogo from '../../assets/University/Canada/cmc.png';
import conestogaLogo from '../../assets/University/Canada/conestoga.png';
import confederationLogo from '../../assets/University/Canada/Confederation_college_logo.jpg';
import crandallLogo from '../../assets/University/Canada/crandall.png';
import cumberlandLogo from '../../assets/University/Canada/cumberlanduniv.png';
import douglasLogo from '../../assets/University/Canada/douglascollege.jpg';
import durhamLogo from '../../assets/University/Canada/DURHAM.svg';
import fanshaweLogo from '../../assets/University/Canada/FANSHAWE.PNG';
import flemingLogo from '../../assets/University/Canada/fleming.png';
import fraserInternationalLogo from '../../assets/University/Canada/fic.svg';
import gbcLogo from '../../assets/University/Canada/GBC.svg';
import georgianLogo from '../../assets/University/Canada/georgian.png';
import georgianTorontoLogo from '../../assets/University/Canada/georgian.png';
import greatPlainsLogo from '../../assets/University/Canada/greatplains.png';
import humberLogo from '../../assets/University/Canada/HUMBER.png';
import jibcLogo from '../../assets/University/Canada/jibc.png';
import keyanoLogo from '../../assets/University/Canada/KEYANO.svg';
import kingsUniversityCollegeLogo from '../../assets/University/Canada/kingsuniversity.png';
import kpuLogo from '../../assets/University/Canada/KPU.svg';
import laSalleLogo from '../../assets/University/Canada/Logo_LaSalle-College-Montreal.png';
import lakeheadPGLogo from '../../assets/University/Canada/lakehead.png';
import lakeheadUGLogo from '../../assets/University/Canada/lakehead.png';
import lakelandLogo from '../../assets/University/Canada/lLAKELAND.svg';
import lambtonLogo from '../../assets/University/Canada/lambton.png';
import langaraLogo from '../../assets/University/Canada/langara.png';
import laurentianLogo from '../../assets/University/Canada/LAURENTIAN.svg';
import loyalistLogo from '../../assets/University/Canada/loyalist.png';
import loyalistTorontoLogo from '../../assets/University/Canada/loyalist.png';
import medicineHatLogo from '../../assets/University/Canada/medicinehatlogo.jpg';
import memorialUniversityLogo from '../../assets/University/Canada/memorial.png';
import mittLogo from '../../assets/University/Canada/MITT.png';
import mountAllisonLogo from '../../assets/University/Canada/mount.webp';
import msvuLogo from '../../assets/University/Canada/mount.webp';
import niagaraLogo from '../../assets/University/Canada/NIAGARA.png';
import niagaraTorontoLogo from '../../assets/University/Canada/NIAGARA.png';
import nicLogo from '../../assets/University/Canada/nic.png';
import nippisingLogo from '../../assets/University/Canada/nippising.png';
import nlcLogo from '../../assets/University/Canada/NLC.svg';
import norquestLogo from '../../assets/University/Canada/norquest.svg';
import northernLogo from '../../assets/University/Canada/NORTHERN.svg';
import okanaganLogo from '../../assets/University/Canada/okanagan.png';
import oldsLogo from '../../assets/University/Canada/OLDS.png';
import ontarioTechLogo from '../../assets/University/Canada/ontariotechu-og-image.jpg';
import parklandLogo from '../../assets/University/Canada/parkland.jpg';
import queensUniversityLogo from '../../assets/University/Canada/queensu.svg';
import redRiverLogo from '../../assets/University/Canada/red-river-college-rrc-vector-logo.png';
import royalRoadsLogo from '../../assets/University/Canada/rru-logo_4c_vert_pos.jpg';
import ryersonLogo from '../../assets/University/Canada/Ryerson_University_logo.png';
import saitLogo from '../../assets/University/Canada/SAIT.svg';
import saskatchewanPolytechnicLogo from '../../assets/University/Canada/saskatchewanpoly.png';
import saultLogo from '../../assets/University/Canada/sault.png';
import selkirkLogo from '../../assets/University/Canada/selkirk-logo.png';
import senecaLogo from '../../assets/University/Canada/SENECA.svg';
import sheridanLogo from '../../assets/University/Canada/sheridan.svg';
import stClairLogo from '../../assets/University/Canada/stclair.svg';
import stLawrenceLogo from '../../assets/University/Canada/stlwarence.jpg';
import stFrancisXavierLogo from '../../assets/University/Canada/stfrancis.svg';
import stThomasUniversityLogo from '../../assets/University/Canada/stthomas.png';
import torontoMetropolitanLogo from '../../assets/University/Canada/tmu.svg';
import trentLogo from '../../assets/University/Canada/Trent-University-Logo.png';
import trinityWesternLogo from '../../assets/University/Canada/trinitylogo.jpg';
import truLogo from '../../assets/University/Canada/thompson.png';
import universityOfCanadaWestLogo from '../../assets/University/Canada/canadawest.avif';
import universityOfGuelphLogo from '../../assets/University/Canada/University-of-Guelph-Logo.png';
import universityOfNewBrunswickLogo from '../../assets/University/Canada/New_Brunswick_Community_College_logo.svg';
import universityOfOttawaLogo from '../../assets/University/Canada/university-of-ottawa-.png';
import universityOfReginaLogo from '../../assets/University/Canada/regina.png';
import universityOfTorontoLogo from '../../assets/University/Canada/utorrento.png';
import universityOfWaterlooLogo from '../../assets/University/Canada/universityofwaterloo_logo_horiz_rgb_1.webp';
import universityOfWindsorLogo from '../../assets/University/Canada/windsor.svg';
import universityOfWinnipegLogo from '../../assets/University/Canada/UW_centre-stack_rgb-black.png';
import vancouverIslandUniversityLogo from '../../assets/University/Canada/VIU.svg';
import vccLogo from '../../assets/University/Canada/vcc.svg';

// United Kingdom
import AbertayLogo from '../../assets/University/UK/ABERTAY.png';
import AberystwythLogo from '../../assets/University/UK/ABERYSTWYTH.png';
import AmityLogo from '../../assets/University/UK/AMITY.png';
import AngliaRuskinLogo from '../../assets/University/UK/ANGLIARUSKIN.png';
import ArtsUniversityBournemouthLogo from '../../assets/University/UK/ARTS.png';
import AstonLogo from '../../assets/University/UK/ASTON.png';
import BangorLogo from '../../assets/University/UK/BANGOR.png';
import BathSpaLogo from '../../assets/University/UK/BATHSPA.png';
import BishopGrossetesteLogo from '../../assets/University/UK/BISHOP.jpg';
import BrunelLogo from '../../assets/University/UK/BRUNEL.png';
import CanterburyLogo from '../../assets/University/UK/CANTERBURY.png';
import CardiffMetropolitanLogo from '../../assets/University/UK/CARDIFF.jpg';
import CoventryLogo from '../../assets/University/UK/coventry.png';
import CranfieldLogo from '../../assets/University/UK/CRANFIELD.png';
import DeMontfortLogo from '../../assets/University/UK/DEMONTFORT.png';
import EdgeHillLogo from '../../assets/University/UK/EDGEHILL.jpg';
import EdinburghNapierLogo from '../../assets/University/UK/EDINBURGH.png';
import HeriotWattLogo from '../../assets/University/UK/HERIOTWATT.png';
import KeeleLogo from '../../assets/University/UK/KEELE.jpg';
import KingsCollegeLogo from '../../assets/University/UK/KINGS.png';
import LeCordonBleuLogo from '../../assets/University/UK/LECORDON.jpg';
import LeedsBeckettLogo from '../../assets/University/UK/LEEDSBECKETT.png';
import LiverpoolJohnMooresLogo from '../../assets/University/UK/LIVERPOOLJOHN.png';
import LondonMetropolitanLogo from '../../assets/University/UK/LONDONMETROPOLITAIN.png';
import LondonSouthBankLogo from '../../assets/University/UK/LONDONSOUTHBANK.png';
import LoughboroughLogo from '../../assets/University/UK/LOUGHBOROUGH.jpg';
import ManchesterMetropolitanLogo from '../../assets/University/UK/MANCHESTERMETROPOLITAIN.png';
import MiddlesexLogo from '../../assets/University/UK/MIDDLESEX.png';
import NorthumbriaLogo from '../../assets/University/UK/NORTHUMBRIA.jpg';
import NottinghamTrentLogo from '../../assets/University/UK/NOTTINGHAMTRENT.png';
import OxfordBrookesLogo from '../../assets/University/UK/OXFORDBROOKES.png';
import PlymouthLogo from '../../assets/University/UK/PLYMOUTH.png';
import QueensUniversityBelfastLogo from '../../assets/University/UK/QUEENS.png';
import RobertGordonLogo from '../../assets/University/UK/ROBERTGORDON.jpg';
import RoyalHollowayLogo from '../../assets/University/UK/ROYALHOLLOWAY.png';
import SheffieldHallamLogo from '../../assets/University/UK/SHEFFIELDHALLAM.png';
import SolentLogo from '../../assets/University/UK/SOLENT.png';
import StMarysLogo from '../../assets/University/UK/STMARY.png';
import SwanseaLogo from '../../assets/University/UK/SWANSEA.png';
import TeessideLogo from '../../assets/University/UK/TEESSIDE.jpg';
import UniversityOfAberdeenLogo from '../../assets/University/UK/ABERDEEN.png';
import UniversityOfLawLogo from '../../assets/University/UK/LAW.png';
import UniversityOfSheffieldLogo from '../../assets/University/UK/SHEFFIELD.png';
import UlsterBirminghamLogo from '../../assets/University/UK/BIRMINGHAM.jpg';
import UlsterNorthernIrelandLogo from '../../assets/University/UK/ULSTERNORTHERNIRELAND.png';
import UniversityCollegeBirminghamLogo from '../../assets/University/UK/BIRMINGHAM.jpg';
import UniversityOfBedfordshireLogo from '../../assets/University/UK/BEDFORDSHIRE.png';
import UniversityOfBournemouthLogo from '../../assets/University/UK/BOURNEMOUTH.png';
import UniversityOfBrightonLogo from '../../assets/University/UK/BRIGHTON.png';
import UniversityOfBristolLogo from '../../assets/University/UK/BRISTOL.png';
import UniversityOfCentralLancashireLogo from '../../assets/University/UK/CENTRALLANCASHIRE.png';
import UniversityOfChesterLogo from '../../assets/University/UK/CHESTER.png';
import UniversityOfChichesterLogo from '../../assets/University/UK/CHICHESTER.png';
import UniversityOfCumbriaLogo from '../../assets/University/UK/CUMBRIA.png';
import UniversityOfDerbyLogo from '../../assets/University/UK/DERBY.png';
import UniversityOfEastAngliaLogo from '../../assets/University/UK/EASTNGLIA.png';
import UniversityOfEastLondonLogo from '../../assets/University/UK/EASTLONDON.png';
import UniversityOfEssexLogo from '../../assets/University/UK/ESSEX.png';
import UniversityOfExeterLogo from '../../assets/University/UK/EXETER.png';
import UniversityOfGreenwichLogo from '../../assets/University/UK/GREENWICH.png';
import UniversityOfHertfordshireLogo from '../../assets/University/UK/HERTFORDSHIRE.png';
import UniversityOfHuddersfieldLogo from '../../assets/University/UK/HUDDERSFIELD.png';
import UniversityOfHullLogo from '../../assets/University/UK/HULL.png';
import UniversityOfLiverpoolLogo from '../../assets/University/UK/LIVERPOOL.png';
import UniversityOfNorthamptonLogo from '../../assets/University/UK/NORTHAMPTON.png';
import UniversityOfNottinghamLogo from '../../assets/University/UK/NOTTINGHAM.png';
import UniversityOfPortsmouthLogo from '../../assets/University/UK/PORTSMOUTH.png';
import UniversityOfRoehamptonLogo from '../../assets/University/UK/ROEHAMPTON.png';
import UniversityOfSalfordLogo from '../../assets/University/UK/SALFORD.png';
import UniversityOfStrathclydeLogo from '../../assets/University/UK/STRATHCLYDE.jpg';
import UniversityOfSussexLogo from '../../assets/University/UK/SUSSEX.png';
import UniversityOfTheCreativeArtsLogo from '../../assets/University/UK/CREATIVEARTS.png';
import UniversityOfTheWestOfEnglandLogo from '../../assets/University/UK/westofengland.png';
import UniversityOfWestLondonLogo from '../../assets/University/UK/WESTLONDON.png';
import UniversityOfWestOfScotlandLogo from '../../assets/University/UK/WESTOFSCOTLAND.png';
import UniversityOfWinchesterLogo from '../../assets/University/UK/WINCHESTER.png';
import UniversityOfWolverhamptonLogo from '../../assets/University/UK/WOLVERHAMPTON.png';
import UniversityOfYorkLogo from '../../assets/University/UK/YORK.png';
import WrexhamGlyndwrLogo from '../../assets/University/UK/WREXHAMGLYNDWR.png';

// Ireland
import TrinityLogo from '../../assets/University/Ireland/trinity.png';
import UniversityCollegDublinLogo from '../../assets/University/Ireland/ucd.png';
import DublinCityUniversityLogo from '../../assets/University/Ireland/dcu.png';
import MaynoothUniversityLogo from '../../assets/University/Ireland/maynooth.png';
import UniversityOfGalwayLogo from '../../assets/University/Ireland/galway.png';
import UniversityCollegeCorkLogo from '../../assets/University/Ireland/ucc.png';
import UniversityOfLimerickLogo from '../../assets/University/Ireland/limerick.png';
import TechnologicalUniversityDublinLogo from '../../assets/University/Ireland/tudublin.png';
import MunsterTechnologicalUniversityLogo from '../../assets/University/Ireland/munster.png';
import SouthEastTechnologicalUniversityLogo from '../../assets/University/Ireland/setu.png';
import TechnologicalUniversityOfTheShannonLogo from '../../assets/University/Ireland/tus.jpg';
import AtlanticTechnologicalUniversitySligoLogo from '../../assets/University/Ireland/atu.png';
import DublinBusinessSchoolLogo from '../../assets/University/Ireland/dbs.png';
import NationalCollegeOfIrelandLogo from '../../assets/University/Ireland/nationalcollege.png';
import GriffithCollegeLogo from '../../assets/University/Ireland/griffith.png';
import IndependentCollegeLogo from '../../assets/University/Ireland/independent.png';
import IBATCollegeLogo from '../../assets/University/Ireland/ibat.png';
import DundalkInstituteOfTechnologyLogo from '../../assets/University/Ireland/dundalk.jpg';

// Australia
import AustInstituteOfBusinessLogo from '../../assets/University/Australia/aiob.png';
import CharlesDarwinUniversityLogo from '../../assets/University/Australia/charlesdarwin.png';
import DeakinUniversityLogo from '../../assets/University/Australia/deakin.png';
import EdithCowanUniversityLogo from '../../assets/University/Australia/edithcowan.png';
import FlindersUniversityLogo from '../../assets/University/Australia/flinders.png';
import HolmesglenInstituteLogo from '../../assets/University/Australia/holmesglen.png';
import IIBITFederationUniversityLogo from '../../assets/University/Australia/iibit.jpg';
import JamesCookUniversityBrisbaneLogo from '../../assets/University/Australia/jamescook.png';
import LaTrobeUniversityLogo from '../../assets/University/Australia/latrobe.png';
import LeCordonBleuAustraliaLogo from '../../assets/University/Australia/lecordonbleu.png';
import SwinburneUniversityLogo from '../../assets/University/Australia/swinburne.png';
import TheHotelSchoolSydneyLogo from '../../assets/University/Australia/thehotelschool.png';
import UniversityOfTasmaniaLogo from '../../assets/University/Australia/tasmania.png';
import UniversityOfWollongongLogo from '../../assets/University/Australia/wolongong.png';
import VictoriaUniversityMelbourneLogo from '../../assets/University/Australia/victoriamelbourne.png';
import VictoriaUniversitySydneyLogo from '../../assets/University/Australia/victoriasydney.png';
import WesternSydneyUniversityLogo from '../../assets/University/Australia/westernsydney.png';
import MelbourneInstituteOfTechnologyLogo from '../../assets/University/Australia/melbourneinstoftech.png';
import KaplanBusinessSchoolLogo from '../../assets/University/Australia/kaplan.png';
import ReachCommunityCollegeLogo from '../../assets/University/Australia/reach.png';
import InstituteOfHealthAndManagementLogo from '../../assets/University/Australia/ihm.png';
import InstituteOfHealthAndNursingAustraliaLogo from '../../assets/University/Australia/ihna.png';
import LaTrobeUniversitySydneyLogo from '../../assets/University/Australia/latrobe.png';
import SouthAustralianInstituteOfBusinessAndTechnologyLogo from '../../assets/University/Australia/saibt.png';
import EdithCowanCollegeLogo from '../../assets/University/Australia/edithcowan.png';
import UniversityOfWollongongCollegeLogo from '../../assets/University/Australia/wolongong.png';
import HolmesInstituteLogo from '../../assets/University/Australia/holmesglen.png';
import WesternSydneyUniversityInternationalCollegeLogo from '../../assets/University/Australia/westernsydney.png';
import EynesburyCollegeLogo from '../../assets/University/Australia/eynesbury.png';
import QueenslandUniversityOfTechnologyLogo from '../../assets/University/Australia/queensland.jpg';

// New Zealand
import TOILogo from '../../assets/University/NewZealand/toi.png';
import AraInstituteLogo from '../../assets/University/NewZealand/ara.png';
import NMITLogo from '../../assets/University/NewZealand/nmit.png';
import AISStHelensLogo from '../../assets/University/NewZealand/ais.jpg';
import WellingtonInstituteLogo from '../../assets/University/NewZealand/witt.png';
import WINTECLogo from '../../assets/University/NewZealand/wintec.jpg';
import OtagoUniversityLogo from '../../assets/University/NewZealand/otago.png';
import UnitecLogo from '../../assets/University/NewZealand/unitec.png';
import AUTUniversityLogo from '../../assets/University/NewZealand/aut.png';
import NorthTecLogo from '../../assets/University/NewZealand/northtec.png';
import MasseyUniversityLogo from '../../assets/University/NewZealand/massey.png';
import WaikatoUniversityLogo from '../../assets/University/NewZealand/waikato.png';
import VictoriaUniversityLogo from '../../assets/University/NewZealand/victoria.png';
import ManukauInstituteLogo from '../../assets/University/NewZealand/manukau.png';
import LincolnUniversityLogo from '../../assets/University/NewZealand/lincoln.jpg';
import CanterburyUniversityLogo from '../../assets/University/NewZealand/uc.png';
import OtagoPolytechnicLogo from '../../assets/University/NewZealand/otagopolytech.png';
import WITTLogo from '../../assets/University/NewZealand/witt.png';
import WhitireiaLogo from '../../assets/University/NewZealand/whitireia.jpg';

// France
import SkemaLogo from '../../assets/University/France/skema.png';
import NeomaLogo from '../../assets/University/France/neoma.png';
import PSBLogo from '../../assets/University/France/psb.png';
import RennesLogo from '../../assets/University/France/rennes.png';
import MontpellierLogo from '../../assets/University/France/montpellier.png';
import KedgeLogo from '../../assets/University/France/kedge.png';
import EMLVLogo from '../../assets/University/France/emlv.png';
import ESSCALogo from '../../assets/University/France/essca.png';
import ESILVLogo from '../../assets/University/France/esilv.png';
import ISEPLLogo from '../../assets/University/France/isep.png';

// Germany
import ArdenLogo from '../../assets/University/Germany/arden.jpg';
import SRHLogo from '../../assets/University/Germany/srh.png';
import MunichLogo from '../../assets/University/Germany/mbs.png';
import ISLLogo from '../../assets/University/Germany/isl.png';
import MacromedicaLogo from '../../assets/University/Germany/macromedica.png';
import ISMLogo from '../../assets/University/Germany/ism.png';
import DresdenLogo from '../../assets/University/Germany/diu.png';
import GISMALogo from '../../assets/University/Germany/gisma.png';
import AppliedScienceEuropeLogo from '../../assets/University/Germany/UE.jpg';
import BerlinSchoolLogo from '../../assets/University/Germany/bsbi.jpg';
import EUBusinessSchoolLogo from '../../assets/University/Germany/eu.jpg';
import IUInternationalLogo from '../../assets/University/Germany/IU.png';

// Sweden
import ChalmersLogo from '../../assets/University/Sweden/chalmers.png';
import HalmstadLogo from '../../assets/University/Sweden/halmstad.png';
import JonkopingLogo from '../../assets/University/Sweden/joenkoeping.png';
import LinnaeusLogo from '../../assets/University/Sweden/linnaeus.png';
import SkovdeLogo from '../../assets/University/Sweden/skovde.png';
import UniversityWestLogo from '../../assets/University/Sweden/west.png';

// Latvia
import RigaLogo from '../../assets/University/Latvia/rigas.png';
import TSIlogo from '../../assets/University/Latvia/tti.png';
import TuribaLogo from '../../assets/University/Latvia/turiba.png';
import VentspilsLogo from '../../assets/University/Latvia/ventspils.png';
import RigaStradinsLogo from '../../assets/University/Latvia/rigastradin.png';
import LatviaUniversityLogo from '../../assets/University/Latvia/latvia.jpg';

// Netherland
import TwenteLogo from '../../assets/University/Netherlands/twente.png'

// Spain
import UcamLogo from '../../assets/University/Spain/ucam.jpg';

// Switzerland
import BhmsLogo from '../../assets/University/Switzerland/bhms.png';
import HTMILogo from '../../assets/University/Switzerland/htmi.png';
import CulinaryArtsLogo from '../../assets/University/Switzerland/culinary.png';
import CesarRitzLogo from '../../assets/University/Switzerland/cesar.png';
import SwissHotelLogo from '../../assets/University/Switzerland/shms.png';
import HotelInstituteLogo from '../../assets/University/Switzerland/him.png';
import IHTTILogo from '../../assets/University/Switzerland/ihtti.jpg';

// Dubai
import MiddleSexLogo from '../../assets/University/Dubai/middlesex.png';
import HeriotWattLogoDubai from '../../assets/University/Dubai/heriotwatt.png';
import StirlingLogo from '../../assets/University/Dubai/stiriling.png';
import WollongongLogo from '../../assets/University/Dubai/wolong.webp';
import AmityLogoDubai from '../../assets/University/Dubai/amity.png';
import ManipalLogo from '../../assets/University/Dubai/manipal.jpg';
import CurtinLogo from '../../assets/University/Dubai/curtin.png';
import MurdochLogo from '../../assets/University/Dubai/murdoch.png';

// Singapore
import PsbLogo from '../../assets/University/Singapore/psb.png';
import LsbfLogo from '../../assets/University/Singapore/lsbf.jpg';
import SimLogo from '../../assets/University/Singapore/sm.png';
// import AtSunriseLogo from '../../assets/University/Singapore/s-sunrise.png';
import KaplanLogo from '../../assets/University/Singapore/Kaplan.jpg';

// USA
import ArizonaLogo from '../../assets/University/USA/ASU.png';
import PaceLogo from '../../assets/University/USA/PACE.png';
import SimmonsLogo from '../../assets/University/USA/SIMMON.png';
import UConnLogo from '../../assets/University/USA/connecticut.png';
import AdelphiLogo from '../../assets/University/USA/adelphi.png';
import AmericanLogo from '../../assets/University/USA/american.png';
import AuburnLogo from '../../assets/University/USA/auburn.png';
import ClevelandLogo from '../../assets/University/USA/clevelandstate.png';
import DaytonLogo from '../../assets/University/USA/dayton.png';
import UICLogo from '../../assets/University/USA/illinois.png';
import UISLogo from '../../assets/University/USA/illinoisspringfield.png';
import UMassBostonLogo from '../../assets/University/USA/umass.png';
import UoPLogo from '../../assets/University/USA/pacific.png';
import USCLogo from '../../assets/University/USA/southcarolina.png';
import TulaneLogo from '../../assets/University/USA/tulane.png';
import WNEULogo from '../../assets/University/USA/wne.png';
import UWYLogo from '../../assets/University/USA/wyoming.png';
import AuburnMontgomeryLogo from '../../assets/University/USA/auburn.png';
import FIULogo from '../../assets/University/USA/floridaatlantic.png';
import LSULogo from '../../assets/University/USA/lsu.png';
import UKLogo from '../../assets/University/USA/kansas.png';
import UULogo from '../../assets/University/USA/utah.png';
import GonzagaLogo from '../../assets/University/USA/gonzaga.png';
import UMLogo from '../../assets/University/USA/mississippi.png';
import UMassAmherstLogo from '../../assets/University/USA/umassamherst.png';
import CMULogo from '../../assets/University/USA/cmu.png';
import EdgewoodLogo from '../../assets/University/USA/edgewood.png';
import LULogo from '../../assets/University/USA/lynchburg.png';
import JHULogo from '../../assets/University/USA/johnhopkins.png';
import RooseveltLogo from '../../assets/University/USA/roosevelt.png';
import VWULogo from '../../assets/University/USA/virginiawesleyan.png';
import RutgersCamdenLogo from '../../assets/University/USA/rutgers.png';
import BellarmineLogo from '../../assets/University/USA/bellarmine.png';
import FairfieldLogo from '../../assets/University/USA/fairfield.png';
import DubuqueLogo from '../../assets/University/USA/dubuque.jpg';
import LewisLogo from '../../assets/University/USA/lewisuniversity.png';
import ShenandoahLogo from '../../assets/University/USA/shenandoah.png';
import OKCULogo from '../../assets/University/USA/oklahoma.png';
import USMKLogo from '../../assets/University/USA/saintmary.jpg';
import BartonLogo from '../../assets/University/USA/barton.png';
import BelmontLogo from '../../assets/University/USA/belmont.png';
import RandolphLogo from '../../assets/University/USA/randolph.jpg';
import TusculumLogo from '../../assets/University/USA/tusculum.png';
import JacksonvilleLogo from '../../assets/University/USA/jacksonville.png';
import PalmBeachLogo from '../../assets/University/USA/palmbeachatlantic.png';
import LakelandLogo from '../../assets/University/USA/LU.png';
import RMULogo from '../../assets/University/USA/RMU.png';
import TowsonLogo from '../../assets/University/USA/towson.png';
import WITLogo from '../../assets/University/USA/wentworth.png';
import MoravianLogo from '../../assets/University/USA/moravian.png';
import BaylorLogo from '../../assets/University/USA/baylor.png';
import DePaulLogo from '../../assets/University/USA/depaul.png';
import FAULogo from '../../assets/University/USA/floridaatlantic.png';
import JMULogo from '../../assets/University/USA/jamesmadison.png';
import LipscombLogo from '../../assets/University/USA/lipscomb.png';
import LIUBLogo from '../../assets/University/USA/longislandbrooklyn.jpg';
import LIUPostLogo from '../../assets/University/USA/lsu.png';
import TAMCCLogo from '../../assets/University/USA/texasa&m.png';
import WWULogo from '../../assets/University/USA/wentworth.png';
import UHLogo from '../../assets/University/USA/hartford.png';




import { Tooltip } from "@mui/material";
import { Helmet } from "react-helmet";



const Universities = () => {
  const unveristyData = [
    {
      country: "Canada",
      universities: [
        { name: "Acadia", logo: acadiaLogo },
        { name: "Algoma", logo: algomaLogo },
        { name: "Algonquin", logo: algonquinLogo },
        { name: "Assiniboine", logo: assiniboineLogo },
        { name: "Bow Valley", logo: bowValleyLogo },
        { name: "Brock", logo: brockLogo },
        { name: "College Of New Caledonia", logo: collegeOfNewCaledoniaLogo },
        { name: "College Of Rockies", logo: collegeOfRockiesLogo },
        { name: "Cambrian", logo: cambrianLogo },
        { name: "Camosun", logo: camosunLogo },
        { name: "Canadore", logo: canadoreLogo },
        { name: "Capilano", logo: capilanoLogo },
        { name: "CBU", logo: cbuLogo },
        { name: "Centennial", logo: centennialLogo },
        { name: "Coast Mountain Clg", logo: coastMountainClgLogo },
        { name: "Conestoga", logo: conestogaLogo },
        { name: "Confederation", logo: confederationLogo },
        { name: "Crandall", logo: crandallLogo },
        { name: "Cumberland", logo: cumberlandLogo },
        { name: "Douglas", logo: douglasLogo },
        { name: "Durham", logo: durhamLogo },
        { name: "Fanshawe", logo: fanshaweLogo },
        { name: "Fleming", logo: flemingLogo },
        { name: "Fraser International College (FIC)", logo: fraserInternationalLogo },
        { name: "GBC", logo: gbcLogo },
        { name: "Georgian", logo: georgianLogo },
        { name: "Georgian@Toronto", logo: georgianTorontoLogo },
        { name: "Great Plains", logo: greatPlainsLogo },
        { name: "Humber", logo: humberLogo },
        { name: "JIBC", logo: jibcLogo },
        { name: "Keyano", logo: keyanoLogo },
        { name: "King's University College", logo: kingsUniversityCollegeLogo },
        { name: "KPU", logo: kpuLogo },
        { name: "LaSalle College", logo: laSalleLogo },
        { name: "Lakehead (PG)", logo: lakeheadPGLogo },
        { name: "Lakehead (UG)", logo: lakeheadUGLogo },
        { name: "Lakeland", logo: lakelandLogo },
        { name: "Lambton", logo: lambtonLogo },
        { name: "Langara", logo: langaraLogo },
        { name: "Laurentian", logo: laurentianLogo },
        { name: "Loyalist", logo: loyalistLogo },
        { name: "Loyalist@Toronto", logo: loyalistTorontoLogo },
        { name: "Medicine Hat College", logo: medicineHatLogo },
        { name: "Memorial University", logo: memorialUniversityLogo },
        { name: "MITT", logo: mittLogo },
        { name: "Mount Allison", logo: mountAllisonLogo },
        { name: "MSVU", logo: msvuLogo },
        { name: "Niagara", logo: niagaraLogo },
        { name: "Niagara@Toronto", logo: niagaraTorontoLogo },
        { name: "NIC", logo: nicLogo },
        { name: "Nippising", logo: nippisingLogo },
        { name: "NLC", logo: nlcLogo },
        { name: "Norquest", logo: norquestLogo },
        { name: "Northern", logo: northernLogo },
        { name: "Okanagan", logo: okanaganLogo },
        { name: "Olds", logo: oldsLogo },
        { name: "Ontario Tech", logo: ontarioTechLogo },
        { name: "Parkland", logo: parklandLogo },
        { name: "Queen's University", logo: queensUniversityLogo },
        { name: "Red River", logo: redRiverLogo },
        { name: "Royal Roads", logo: royalRoadsLogo },
        { name: "Ryerson", logo: ryersonLogo },
        { name: "SAIT", logo: saitLogo },
        { name: "Saskatchewan Polytechnic", logo: saskatchewanPolytechnicLogo },
        { name: "Sault", logo: saultLogo },
        { name: "Selkirk", logo: selkirkLogo },
        { name: "Seneca", logo: senecaLogo },
        { name: "Sheridan", logo: sheridanLogo },
        { name: "St. Clair", logo: stClairLogo },
        { name: "St. Lawrence", logo: stLawrenceLogo },
        { name: "St. Francis Xavier", logo: stFrancisXavierLogo },
        { name: "St. Thomas University", logo: stThomasUniversityLogo },
        { name: "Toronto Metropolitan", logo: torontoMetropolitanLogo },
        { name: "Trent", logo: trentLogo },
        { name: "Trinity Western", logo: trinityWesternLogo },
        { name: "TRU", logo: truLogo },
        { name: "University of Canada West", logo: universityOfCanadaWestLogo },
        { name: "University of Guelph", logo: universityOfGuelphLogo },
        { name: "University of New Brunswick", logo: universityOfNewBrunswickLogo },
        { name: "University of Ottawa", logo: universityOfOttawaLogo },
        { name: "University of Regina", logo: universityOfReginaLogo },
        { name: "University of Toronto", logo: universityOfTorontoLogo },
        { name: "University of Waterloo", logo: universityOfWaterlooLogo },
        { name: "University of Windsor", logo: universityOfWindsorLogo },
        { name: "University of Winnipeg", logo: universityOfWinnipegLogo },
        { name: "Vancouver Island University", logo: vancouverIslandUniversityLogo },
        { name: "VCC", logo: vccLogo },
      ],
    },
    {
      country: "UK",
      universities: [
        {
          name: "Abertay University",
          logo: AbertayLogo,
        },
        {
          name: "Aberystwyth University",
          logo: AberystwythLogo,
        },
        {
          name: "Amity Education Group (Amity Education Services)",
          logo: AmityLogo,
        },
        {
          name: "Anglia Ruskin University Cambridge and Chelmsford campus",
          logo: AngliaRuskinLogo,
        },
        {
          name: "Arts University Bournemouth",
          logo: ArtsUniversityBournemouthLogo,
        },
        {
          name: "Aston University",
          logo: AstonLogo,
        },
        {
          name: "Bangor University",
          logo: BangorLogo,
        },
        {
          name: "Bath Spa University",
          logo: BathSpaLogo,
        },
        {
          name: "Bishop Grosseteste University",
          logo: BishopGrossetesteLogo,
        },
        {
          name: "Brunel University London",
          logo: BrunelLogo,
        },
        {
          name: "Canterbury Christ Church University",
          logo: CanterburyLogo,
        },
        {
          name: "Cardiff Metropolitan University",
          logo: CardiffMetropolitanLogo,
        },
        {
          name: "Coventry University",
          logo: CoventryLogo,
        },
        {
          name: "Cranfield University",
          logo: CranfieldLogo,
        },
        {
          name: "De Montfort University",
          logo: DeMontfortLogo,
        },
        {
          name: "Edge Hill University",
          logo: EdgeHillLogo,
        },
        {
          name: "Edinburgh Napier University",
          logo: EdinburghNapierLogo,
        },
        {
          name: "Heriot-Watt University",
          logo: HeriotWattLogo,
        },
        {
          name: "Keele University",
          logo: KeeleLogo,
        },
        {
          name: "King's College London",
          logo: KingsCollegeLogo,
        },
        {
          name: "Le Cordon Bleu",
          logo: LeCordonBleuLogo,
        },
        {
          name: "Leeds Beckett University",
          logo: LeedsBeckettLogo,
        },
        {
          name: "Liverpool John Moores University",
          logo: LiverpoolJohnMooresLogo,
        },
        {
          name: "London Metropolitan University",
          logo: LondonMetropolitanLogo,
        },
        {
          name: "London South Bank University",
          logo: LondonSouthBankLogo,
        },
        {
          name: "Loughborough University",
          logo: LoughboroughLogo,
        },
        {
          name: "Manchester Metropolitan University",
          logo: ManchesterMetropolitanLogo,
        },
        {
          name: "Middlesex University",
          logo: MiddlesexLogo,
        },
        {
          name: "Northumbria University",
          logo: NorthumbriaLogo,
        },
        {
          name: "Nottingham Trent University",
          logo: NottinghamTrentLogo,
        },
        {
          name: "Oxford Brookes University",
          logo: OxfordBrookesLogo,
        },
        {
          name: "Plymouth University",
          logo: PlymouthLogo,
        },
        {
          name: "Queen's University Belfast",
          logo: QueensUniversityBelfastLogo,
        },
        {
          name: "Robert Gordon University",
          logo: RobertGordonLogo,
        },
        {
          name: "Royal Holloway, University of London",
          logo: RoyalHollowayLogo,
        },
        {
          name: "Sheffield Hallam University",
          logo: SheffieldHallamLogo,
        },
        {
          name: "Solent University",
          logo: SolentLogo,
        },
        {
          name: "St Mary's University, Twickenham",
          logo: StMarysLogo,
        },
        {
          name: "Swansea University",
          logo: SwanseaLogo,
        },
        {
          name: "Teesside University",
          logo: TeessideLogo,
        },
        {
          name: "University of Aberdeen",
          logo: UniversityOfAberdeenLogo,
        },
        {
          name: "University of Law",
          logo: UniversityOfLawLogo,
        },
        {
          name: "University of Sheffield",
          logo: UniversityOfSheffieldLogo,
        },
        {
          name: "Ulster University (Birmingham campus)",
          logo: UlsterBirminghamLogo,
        },
        {
          name: "Ulster University (Northern Ireland campus)",
          logo: UlsterNorthernIrelandLogo,
        },
        {
          name: "University College Birmingham",
          logo: UniversityCollegeBirminghamLogo,
        },
        {
          name: "University of Bedfordshire",
          logo: UniversityOfBedfordshireLogo,
        },
        {
          name: "Bournemouth University",
          logo: UniversityOfBournemouthLogo,
        },
        {
          name: "University of Brighton",
          logo: UniversityOfBrightonLogo,
        },
        {
          name: "University of Bristol",
          logo: UniversityOfBristolLogo,
        },
        {
          name: "University of Central Lancashire",
          logo: UniversityOfCentralLancashireLogo,
        },
        {
          name: "University of Chester",
          logo: UniversityOfChesterLogo,
        },
        {
          name: "University of Chichester",
          logo: UniversityOfChichesterLogo,
        },
        {
          name: "University of Cumbria",
          logo: UniversityOfCumbriaLogo,
        },
        {
          name: "University of Derby",
          logo: UniversityOfDerbyLogo,
        },
        {
          name: "University of East Anglia",
          logo: UniversityOfEastAngliaLogo,
        },
        {
          name: "University of East London",
          logo: UniversityOfEastLondonLogo,
        },
        {
          name: "University of Essex",
          logo: UniversityOfEssexLogo,
        },
        {
          name: "University of Exeter",
          logo: UniversityOfExeterLogo,
        },
        {
          name: "University of Greenwich",
          logo: UniversityOfGreenwichLogo,
        },
        {
          name: "University of Hertfordshire",
          logo: UniversityOfHertfordshireLogo,
        },
        {
          name: "University of Huddersfield",
          logo: UniversityOfHuddersfieldLogo,
        },
        {
          name: "University of Hull",
          logo: UniversityOfHullLogo,
        },
        {
          name: "University of Liverpool",
          logo: UniversityOfLiverpoolLogo,
        },
        {
          name: "University of Northampton",
          logo: UniversityOfNorthamptonLogo,
        },
        {
          name: "University of Nottingham",
          logo: UniversityOfNottinghamLogo,
        },
        {
          name: "University of Portsmouth",
          logo: UniversityOfPortsmouthLogo,
        },
        {
          name: "University of Roehampton",
          logo: UniversityOfRoehamptonLogo,
        },
        {
          name: "University of Salford",
          logo: UniversityOfSalfordLogo,
        },
        {
          name: "University of Strathclyde",
          logo: UniversityOfStrathclydeLogo,
        },
        {
          name: "University of Sussex",
          logo: UniversityOfSussexLogo,
        },
        {
          name: "University of the Creative Arts",
          logo: UniversityOfTheCreativeArtsLogo,
        },
        {
          name: "University of the West of England",
          logo: UniversityOfTheWestOfEnglandLogo,
        },
        {
          name: "University of West London",
          logo: UniversityOfWestLondonLogo,
        },
        {
          name: "University of the West of Scotland",
          logo: UniversityOfWestOfScotlandLogo,
        },
        {
          name: "University of Winchester",
          logo: UniversityOfWinchesterLogo,
        },
        {
          name: "University of Wolverhampton",
          logo: UniversityOfWolverhamptonLogo,
        },
        {
          name: "University of York",
          logo: UniversityOfYorkLogo,
        },
        {
          name: "Wrexham Glyndŵr University",
          logo: WrexhamGlyndwrLogo,
        },
      ],
    },

    {
      country: "Ireland",
      universities: [
        {
            name: "Trinity College Dublin",
            logo: TrinityLogo,
        },
        {
            name: "University Colleg Dublin",
            logo: UniversityCollegDublinLogo,
        },
        {
            name: "Dublin City University",
            logo: DublinCityUniversityLogo,
        },
        {
            name: "Maynooth University",
            logo: MaynoothUniversityLogo,
        },
        {
            name: "University of Galway",
            logo: UniversityOfGalwayLogo,
        },
        {
            name: "University College Cork",
            logo: UniversityCollegeCorkLogo,
        },
        {
            name: "University Of Limerick",
            logo: UniversityOfLimerickLogo,
        },
        {
            name: "Technological University Dublin",
            logo: TechnologicalUniversityDublinLogo,
        },
        {
            name: "Munster Technological University",
            logo: MunsterTechnologicalUniversityLogo,
        },
        {
            name: "South East Technological University",
            logo: SouthEastTechnologicalUniversityLogo,
        },
        {
            name: "Technological University of the Shannon",
            logo: TechnologicalUniversityOfTheShannonLogo,
        },
        {
            name: "Atlantic Technological University , Sligo",
            logo: AtlanticTechnologicalUniversitySligoLogo,
        },
        {
            name: "Dublin Business School",
            logo: DublinBusinessSchoolLogo,
        },
        {
            name: "National College of Ireland",
            logo: NationalCollegeOfIrelandLogo,
        },
        {
            name: "Griffith College",
            logo: GriffithCollegeLogo,
        },
        {
            name: "Independent College",
            logo: IndependentCollegeLogo,
        },
        {
            name: "IBAT College",
            logo: IBATCollegeLogo,
        },
        {
            name: "Dundalk Institute of Technology",
            logo: DundalkInstituteOfTechnologyLogo,
        },
    ]
    },

    {
      country: "Australia",
      universities: [
        {
            name: "Australian Institute of Business and Technology",
            logo: AustInstituteOfBusinessLogo,
        },
        {
            name: "Charles Darwin University",
            logo: CharlesDarwinUniversityLogo,
        },
        {
            name: "Deakin University",
            logo: DeakinUniversityLogo,
        },
        {
            name: "Edith Cowan University",
            logo: EdithCowanUniversityLogo,
        },
        {
            name: "Flinders University",
            logo: FlindersUniversityLogo,
        },
        {
            name: "Holmesglen Institute of TAFE [Holmesglen]",
            logo: HolmesglenInstituteLogo,
        },
        {
            name: "IIBIT Federation University",
            logo: IIBITFederationUniversityLogo,
        },
        {
            name: "James Cook University Brisbane",
            logo: JamesCookUniversityBrisbaneLogo,
        },
        {
            name: "La Trobe University",
            logo: LaTrobeUniversityLogo,
        },
        {
            name: "Le Cordon Bleu Australia",
            logo: LeCordonBleuAustraliaLogo,
        },
        {
            name: "Swinburne University of Technology (SWINBURNE) - Sydney Campus",
            logo: SwinburneUniversityLogo,
        },
        {
            name: "The Hotel School Sydney - Southern Cross University",
            logo: TheHotelSchoolSydneyLogo,
        },
        {
            name: "University of Tasmania",
            logo: UniversityOfTasmaniaLogo,
        },
        {
            name: "University of Wollongong",
            logo: UniversityOfWollongongLogo,
        },
        {
            name: "Victoria University of Melbourne",
            logo: VictoriaUniversityMelbourneLogo,
        },
        {
            name: "Victoria University of Sydney (Applied through ECA)",
            logo: VictoriaUniversitySydneyLogo,
        },
        {
            name: "Western Sydney University",
            logo: WesternSydneyUniversityLogo,
        },
        {
            name: "Melbourne Institute of Technology",
            logo: MelbourneInstituteOfTechnologyLogo,
        },
        {
            name: "Kaplan Business School",
            logo: KaplanBusinessSchoolLogo,
        },
        {
            name: "Reach Community College",
            logo: ReachCommunityCollegeLogo,
        },
        {
            name: "Institute of Health and Management - IHM",
            logo: InstituteOfHealthAndManagementLogo,
        },
        {
            name: "Institute of Health and Nursing Australia - IHNA",
            logo: InstituteOfHealthAndNursingAustraliaLogo,
        },
        {
            name: "La Trobe University Sydney and La Trobe College Australia (LTUSC)(Pathway programs)",
            logo: LaTrobeUniversitySydneyLogo,
        },
        {
            name: "South Australian Institute of Business and Technology (SAIBT)",
            logo: SouthAustralianInstituteOfBusinessAndTechnologyLogo,
        },
        {
            name: "Edithcowan College",
            logo: EdithCowanCollegeLogo,
        },
        {
            name: "University of Wollongong College",
            logo: UniversityOfWollongongCollegeLogo,
        },
        {
            name: "Holmes Institute Pvt Ltd",
            logo: HolmesInstituteLogo,
        },
        {
            name: "Western Sydney University International College",
            logo: WesternSydneyUniversityInternationalCollegeLogo,
        },
        {
            name: "Eynesbury College(University of Adelaide and Unisa)",
            logo: EynesburyCollegeLogo,
        },
        {
            name: "Queensland University of Technology",
            logo: QueenslandUniversityOfTechnologyLogo,
        },
    ],
    },

    {
      country: "NZ",
      universities: [
        {
          name: "Toi Ohomai Institute of Technology Limited",
          logo: TOILogo,
        },
        {
          name: "Ara Institute of Canterbury Ltd",
          logo: AraInstituteLogo,
        },
        {
          name: "Nelson Marlborough Institute of Technology Limited (NMIT)",
          logo: NMITLogo,
        },
        {
          name: "AIS St Helens",
          logo: AISStHelensLogo,
        },
        {
          name: "Wellington Institute of Technology",
          logo: WellingtonInstituteLogo,
        },
        {
          name: "Waikato Institute of Technology (WINTEC)",
          logo: WINTECLogo,
        },
        {
          name: "University of Otago",
          logo: OtagoUniversityLogo,
        },
        {
          name: "Unitec Institute of Technology (Unitec)",
          logo: UnitecLogo,
        },
        {
          name: "AUT University",
          logo: AUTUniversityLogo,
        },
        { 
          name: "North Tec", 
          logo: NorthTecLogo,
        },
        {
          name: "Massey University",
          logo: MasseyUniversityLogo,
        },
        {
          name: "University of Waikato",
          logo: WaikatoUniversityLogo,
        },
        {
          name: "Victoria University of Wellington",
          logo: VictoriaUniversityLogo,
        },
        {
          name: "Manukau Institute of Technology",
          logo: ManukauInstituteLogo,
        },
        {
          name: "Lincoln University",
          logo: LincolnUniversityLogo,
        },
        {
          name: "University of Canterbury",
          logo: CanterburyUniversityLogo,
        },
        {
          name: "Otago Polytechnic",
          logo: OtagoPolytechnicLogo,
        },
        {
          name: "Western Institute of Technology at Taranaki, WITT",
          logo: WITTLogo,
        },
        { 
          name: "Whitireia", 
          logo: WhitireiaLogo,
        },
      ],
    },

    {
      country: "France",
      universities: [
        {
          name: "SKEMA Business School",
          logo: SkemaLogo,
        },
        {
          name: "NEOMA Business School",
          logo: NeomaLogo,
        },
        {
          name: "Paris School of Business (PSB)",
          logo: PSBLogo,
        },
        {
          name: "Rennes Business School",
          logo: RennesLogo,
        },
        {
          name: "Montpellier Business School",
          logo: MontpellierLogo,
        },
        {
          name: "Kedge Business School",
          logo: KedgeLogo,
        },
        {
          name: "EMLV (Leonard De Vinci)",
          logo: EMLVLogo,
        },
        { 
          name: "ESSCA", 
          logo: ESSCALogo,
        },
        {
          name: "ESILV Engineering School",
          logo: ESILVLogo,
        },
        { 
          name: "ISEP", 
          logo: ISEPLLogo,
        },
      ],
    },

    {
      country: "Germany",
      universities: [
        {
          name: "Arden University",
          logo: ArdenLogo,
        },
        {
          name: "SRH Hochschukeb Berlin GmbH",
          logo: SRHLogo,
        },
        {
          name: "Munich Business School",
          logo: MunichLogo,
        },
        {
          name: "ISL Sprachschule",
          logo: ISLLogo,
        },
        {
          name: "Macromedica University of Applied Science",
          logo: MacromedicaLogo,
        },
        {
          name: "ISM, International School of Management",
          logo: ISMLogo,
        },
        {
          name: "Dresden International University",
          logo: DresdenLogo,
        },
        {
          name: "GISMA Business School",
          logo: GISMALogo,
        },
        {
          name: "University of Applied Science Europe",
          logo: AppliedScienceEuropeLogo,
        },
        {
          name: "Berlin School of Business and Innovation",
          logo: BerlinSchoolLogo,
        },
        {
          name: "EU Business School",
          logo: EUBusinessSchoolLogo,
        },
        {
          name: "IU International University of Applied Science",
          logo: IUInternationalLogo,
        },
      ],
    },
    {
      country: "Sweden",
      universities: [
        {
          name: "Chalmers University of Technology",
          logo: ChalmersLogo,
        },
        {
          name: "Halmstad University",
          logo: HalmstadLogo,
        },
        {
          name: "Jönköping University",
          logo: JonkopingLogo,
        },
        {
          name: "Linnaeus University",
          logo: LinnaeusLogo,
        },
        {
          name: "University of Skövde",
          logo: SkovdeLogo,
        },
        {
          name: "University West",
          logo: UniversityWestLogo,
        },
      ],
    },
    {
      country: "Latvia",
      universities: [
        {
          name: "Riga Technical University",
          logo: RigaLogo,
        },
        {
          name: "Transport and Telecommunication Institute (TSI)",
          logo: TSIlogo,
        },
        {
          name: "Turiba University",
          logo: TuribaLogo,
        },
        {
          name: "Ventspils University College",
          logo: VentspilsLogo,
        },
        {
          name: "Riga Stradins University",
          logo: RigaStradinsLogo,
        },
        {
          name: "University of Latvia",
          logo: LatviaUniversityLogo,
        },
      ],
    },
    {
      country: "Netherlands",
      universities: [
        {
          name: "University of Twente",
          logo: TwenteLogo,
        },
      ],
    },
    {
      country: "Spain",
      universities: [
        // {
        //   name: "Universidad Católica San Antonio de Murcia",
        //   logo: "https://path-to-logo/universidad-catolica-san-antonio-de-murcia-logo.png",
        // },
        { name: "UCAM", logo: UcamLogo },
      ],
    },
    {
      country: "Switzerland",
      universities: [
        {
          name: "Business and Hotel Management School",
          logo: BhmsLogo,
        },
        {
          name: "Hotel & Tourism Management Institute (HTMI) Switzerland",
          logo: HTMILogo,
        },
        {
          name: "Culinary Arts Academy",
          logo: CulinaryArtsLogo,
        },
        {
          name: "Cesar Ritz Colleges",
          logo: CesarRitzLogo,
        },
        {
          name: "Swiss Hotel Management School",
          logo: SwissHotelLogo,
        },
        {
          name: "Hotel Institute Montreux",
          logo: HotelInstituteLogo,
        },
        {
          name: "IHTTI School of Hotel Management",
          logo: IHTTILogo,
        },
      ],
    },
    {
      country: "Dubai",
      universities:[
        {
          name: "Middlesex University",
          logo: MiddleSexLogo,
        },
        {
          name: "Heriot-Watt University",
          logo: HeriotWattLogoDubai,
        },
        {
          name: "University of Stirling",
          logo: StirlingLogo,
        },
        {
          name: "University of Wollongong",
          logo: WollongongLogo,
        },
        {
          name: "Amity Education Group",
          logo: AmityLogoDubai,
        },
        {
          name: "Manipal Academy",
          logo: ManipalLogo,
        },
        {
          name: "Curtin Dubai",
          logo: CurtinLogo,
        },
        {
          name: "Murdoch University Dubai",
          logo: MurdochLogo,
        },
      ],
    },
    {
      country: "Singapore",
      universities: [
        {
          name: "PSB Academy",
          logo: PsbLogo,
        },
        {
          name: "London School of Business and Finance (LSBF)",
          logo: LsbfLogo,
        },
        {
          name: "Singapore Institute of Management",
          logo: SimLogo,
        },
        // {
        //   name: "AT sunrise",
        //   logo: AtSunriseLogo,
        // },
        {
          name: "Kaplan Higher Education Academy",
          logo: KaplanLogo,
        },
      ],
    },
    {
      country: "USA",
      universities: [
        {
          name: "Arizona State University",
          logo: ArizonaLogo,
        },
        {
          name: "Pace University in New York",
          logo: PaceLogo,
        },
        {
          name: "Simmons University in Boston",
          logo: SimmonsLogo,
        },
        {
          name: "University of Connecticut",
          logo: UConnLogo,
        },
        {
          name: "Adelphi University",
          logo: AdelphiLogo,
        },
        {
          name: "American University",
          logo: AmericanLogo,
        },
        {
          name: "Auburn University",
          logo: AuburnLogo,
        },
        {
          name: "Cleveland State University",
          logo: ClevelandLogo,
        },
        {
          name: "University of Dayton",
          logo: DaytonLogo,
        },
        {
          name: "University of Illinois at Chicago",
          logo: UICLogo,
        },
        {
          name: "University of Illinois at Springfield",
          logo: UISLogo,
        },
        {
          name: "UMASS Boston",
          logo: UMassBostonLogo,
        },
        {
          name: "University of the Pacific",
          logo: UoPLogo,
        },
        {
          name: "University of South Carolina",
          logo: USCLogo,
        },
        {
          name: "Tulane University",
          logo: TulaneLogo,
        },
        {
          name: "Western New England University",
          logo: WNEULogo,
        },
        {
          name: "University of Wyoming",
          logo: UWYLogo,
        },
        {
          name: "Auburn University at Montgomery",
          logo: AuburnMontgomeryLogo,
        },
        {
          name: "Florida International University",
          logo: FIULogo,
        },
        {
          name: "Louisiana State University",
          logo: LSULogo,
        },
        {
          name: "University of Kansas",
          logo: UKLogo,
        },
        {
          name: "University of Utah",
          logo: UULogo,
        },
        {
          name: "Gonzaga University",
          logo: GonzagaLogo,
        },
        {
          name: "University of Mississippi",
          logo: UMLogo,
        },
        {
          name: "Umass Amherst (Live)",
          logo: UMassAmherstLogo,
        },
        {
          name: "Central Methodist University",
          logo: CMULogo,
        },
        {
          name: "Edgewood College",
          logo: EdgewoodLogo,
        },
        {
          name: "University of Lynchburg",
          logo: LULogo,
        },
        {
          name: "Johns Hopkins University",
          logo: JHULogo,
        },
        {
          name: "Roosevelt University",
          logo: RooseveltLogo,
        },
        {
          name: "Virginia Wesleyan University",
          logo: VWULogo,
        },
        {
          name: "Rutgers University - Camden",
          logo: RutgersCamdenLogo,
        },
        {
          name: "Bellarmine University",
          logo: BellarmineLogo,
        },
        {
          name: "Fairfield University",
          logo: FairfieldLogo,
        },
        {
          name: "University of Dubuque",
          logo: DubuqueLogo,
        },
        {
          name: "Lewis University",
          logo: LewisLogo,
        },
        {
          name: "Shenandoah University",
          logo: ShenandoahLogo,
        },
        {
          name: "Oklahoma City University",
          logo: OKCULogo,
        },
        {
          name: "University of Saint Mary (Kansas)",
          logo: USMKLogo,
        },
        {
          name: "Barton College",
          logo: BartonLogo,
        },
        {
          name: "Belmont University",
          logo: BelmontLogo,
        },
        {
          name: "Randolph College",
          logo: RandolphLogo,
        },
        {
          name: "Tusculum University",
          logo: TusculumLogo,
        },
        {
          name: "Jacksonville University",
          logo: JacksonvilleLogo,
        },
        {
          name: "Palm Beach Atlantic University",
          logo: PalmBeachLogo,
        },
        {
          name: "Lakeland University",
          logo: LakelandLogo,
        },
        {
          name: "Robert Morris University",
          logo: RMULogo,
        },
        {
          name: "Towson University",
          logo: TowsonLogo,
        },
        {
          name: "Wentworth Institute of Technology",
          logo: WITLogo,
        },
        {
          name: "Moravian University",
          logo: MoravianLogo,
        },
        {
          name: "Baylor University",
          logo: BaylorLogo,
        },
        {
          name: "DePaul University",
          logo: DePaulLogo,
        },
        {
          name: "Florida Atlantic University",
          logo: FAULogo,
        },
        {
          name: "James Madison University",
          logo: JMULogo,
        },
        {
          name: "Lipscomb University",
          logo: LipscombLogo,
        },
        {
          name: "Long Island University - Brooklyn",
          logo: LIUBLogo,
        },
        {
          name: "Long Island University - Post",
          logo: LIUPostLogo,
        },
        {
          name: "Texas A&M University - Corpus Christi",
          logo: TAMCCLogo,
        },
        {
          name: "Western Washington University",
          logo: WWULogo,
        },
        {
          name: "University of Hartford",
          logo: UHLogo,
        },
      ],
    },
  ];

  const [activeFilter, setActiveFilter] = useState(unveristyData[0].country);
  const [universities, setUniversities] = useState([]);

  const filterUniversities = (continent) => {
    const filter = unveristyData?.find((obj) => obj.country === continent);
    return filter ? setUniversities(filter.universities) : setUniversities([]);
  };

  useEffect(() => {
    filterUniversities(activeFilter);
    
  }, [activeFilter]);


  
  return (
 <>   <Helmet>
 <title>Universities</title>
</Helmet>
    <section className="my-10 flex flex-col items-center justify-start ">
      <div className="w-[90%] h-full font-Jakarta flex flex-col space-y-8">
        <div className="flex flex-row flex-wrap items-center justify-between">
          <motion.h2
            initial={{ opacity: 0, translateY: 150 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.8 }}
            className="lg:text-left xl:text-left md:text-left text-4xl md:text-5xl text-center  leading-snug font-semibold"
            style={{ lineHeight: 1.3 }}
          >
            Discover Your Ideal Study
            <br />
            <span className="text-text"> Abroad Destination</span>
          </motion.h2>
          <p className="w-full md:w-full lg:w-[40%] text-[20px] text-text">
            Unlock a world of opportunities tailored just for you with Benchmark
            Education. Let us guide you to the perfect study destination for a
            brighter, successful future.
          </p>
        </div>
        <div className="lg:hidden  block">
          <div className="bg-background py-2 my-5 rounded-lg flex flex-row lg:flex-row md:flex-row xl:flex-row flex-wrap space-x-0 lg:space-x-5 md:space-x-5 justify-start lg:justify-between  px-5">
            <select
              name="country"
              id="country"
              className="w-full bg-transparent py-5 outline-none"
              onChange={(e) => setActiveFilter(e.target.value)}
            >
              {unveristyData.map((obj, index) => (
                <option key={index} value={obj.country}>
                  {obj.country}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
            {universities.map((obj, index) => (
              <Link key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", duration: 0.8 }}
                  className="flex flex-col items-center bg-background justify-center gap-5 border w-[145px] lg:w-[250px] md:w-[250px] xl:w-[250px] py-2 rounded-lg cursor-pointer hover:shadow-lg"
                >
                      <div className="h-[80px] w-[80px]">
                            <img src={obj.logo} alt={obj.name} className="w-full h-full object-contain" />
                            </div>
                  <h5 className="text-[13px] text-center text-black">{obj.name}</h5>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <Tabs value={activeFilter}>
            <TabsHeader>
              {unveristyData.map((obj, index) => (
                <Tab key={index} value={obj.country}>
                  {obj.country}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {unveristyData.map((obj, index) => (
                <TabPanel key={index} value={obj.country}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10  place-items-center">
                    {obj.universities.map((item, index) => (
                      <Link>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ ease: "easeInOut", duration: 0.8 }}
                          className="flex flex-col  items-center justify-center space-x-5 border w-[150px] lg:w-[350px] md:w-[250px] xl:w-[350px] py-2 rounded-lg cursor-pointer hover:shadow-lg"
                        >
                          <Tooltip   title={item.name }>
                            <div className="h-[120px] w-[120px]">
                            <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                            </div>
                           
                           
                          </Tooltip>
                          {/* <h5 className="font-bold text-white text-[16px] text-center capitalize ">
                            {item.name}
                          </h5> */}
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
      <div></div>
    </section>
    </>
  );
};

export default Universities;
